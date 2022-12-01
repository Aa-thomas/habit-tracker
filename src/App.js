import app from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [habitDatabase, setHabitDatabase] = useState([]);

	useEffect(() => {
		// create a variable that holds our database details
		const db = getDatabase(app);

		// create a variable that holds our reference to the database
		const dbRef = ref(db);

		// add an event listener to that variable that will fire
		// from the database, and call that data 'response'.
		onValue(dbRef, (response) => {
			console.log(response.val());
			// here we're creating a variable to store the new state we want to introduce to our app
			const newState = [];

			// here we store the response from our query to Firebase inside of a variable called data.
			// .val() is a Firebase method that gets us the information we want
			const data = response.val();
		});
	}, []);

	return (
		<div>
			<h1>Hello World</h1>
			<ul>
				{habitDatabase.map((day) => {
					return <li>{day}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
