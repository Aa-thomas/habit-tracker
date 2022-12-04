import app from './firebase';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Habit from './components/Habit';
import DisplayHabits from './components/DisplayHabits';
import { doc, setDoc } from 'firebase/firestore';

function App() {
	const [habitList, setHabitList] = useState([]);
	const [userInput, setUserInput] = useState('');

	useEffect(() => {
		// create a variable that holds our database details
		const db = getDatabase(app);

		// create a variable that holds our reference to the database
		const dbRef = ref(db);

		// add an event listener to that variable that will fire
		// from the database, and call that data 'response'.
		onValue(dbRef, (response) => {
			// here we're creating a variable to store the new state we want to introduce to our app
			const newState = [];

			// here we store the response from our query to Firebase inside of a variable called data.
			// .val() is a Firebase method that gets us the information we want
			const data = response.val();

			// here we're looping through the data we got from Firebase and pushing it into our newState array
			for (let key in data) {
				newState.push({
					name: data[key],
					score: 0,
					key: key,
				});
			}

			// here we're setting the state of our habitList to the newState we just created
			setHabitList(newState);

			console.log('useEffect fired', newState);
		});
	}, []);

	// this event will fire every time there is a change in the input it is attached to
	const handleInputChange = (e) => {
		// we're telling React to update the state of our `App` component to be
		// equal to whatever is currently the value of the input field
		setUserInput(e.target.value);
	};

	// this event will fire when the form is submitted
	const handleSubmit = async (e) => {
		// this prevents the page from refreshing when the form is submitted
		e.preventDefault();

		// create a reference to our database
		const database = getDatabase(app);
		const db = ref(database);

		// push the value of the `userInput` state to the database
		// if (userInput.trim()) push(dbRef, userInput);
		// else alert('Please enter a habit');
		push(db, userInput);

		// reset the state to an empty string
		setUserInput('');
	};

	return (
		<div className="habit-board">
			<Header title={'Habit Tracker'} totalHabits={habitList.length} />

			{/* Habit List */}
			<DisplayHabits habitList={habitList} setHabitList={setHabitList} />
			<form action="submit">
				<label htmlFor="newBook">Add a book to your bookshelf</label>
				<input
					type="text"
					id="newBook"
					onChange={handleInputChange}
					value={userInput}
				/>
				<button onClick={handleSubmit}>Add Book</button>
			</form>
		</div>
	);
}

export default App;
