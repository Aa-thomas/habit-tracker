import { firestoreDB } from './firebase';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Habit from './components/Habit';
import { addToFirestoreDB, getFirestoreData } from './firestore';
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	onSnapshot,
	setDoc,
} from 'firebase/firestore';
import { BarChart } from './components/BarChart';
import { PieChart } from './components/PieChart';
import { LineChart } from './components/LineChart';
import { getDate } from 'date-fns';

function App() {
	const [habitList, setHabitList] = useState([]);
	const [userInput, setUserInput] = useState('');
	const collectionRef = collection(firestoreDB, 'habits');

	useEffect(() => {
		const getHabits = async () => {
			const data = await getDocs(collectionRef);
			setHabitList(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		getHabits();

		onSnapshot(collectionRef, (snapshot) => {
			setHabitList(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
					date: new Date(),
				}))
			);
		});
	}, []);

	console.log(habitList);

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (userInput.trim())
			addToFirestoreDB(userInput, setHabitList, habitList);
		else alert('Please enter a habit');
		setUserInput('');
	};

	// this event will fire when the Remove button is clicked
	const handleRemove = async (id) => {
		await deleteDoc(doc(firestoreDB, 'habits', id));
	};

	const incrementScore = async (id, delta) => {
		const habitRef = doc(firestoreDB, 'habits', id);
		const newScore = { amount: delta + 1 };
		await setDoc(habitRef, newScore, { merge: true });
	};

	const decrementScore = async (id, delta) => {
		const habitRef = doc(firestoreDB, 'habits', id);
		const newScore = { amount: delta - 1 };
		await setDoc(habitRef, newScore, { merge: true });
	};

	let habits = [...habitList].map((habit) => {
		console.log(habit.id);
		return (
			<div>
				<Habit
					key={habit.id}
					habitKey={habit.id}
					habitName={habit.name}
					score={habit.amount}
					handleRemove={() => handleRemove(habit.id)}
					incrementScore={() => incrementScore(habit.id, habit.amount)}
					decrementScore={() => decrementScore(habit.id, habit.amount)}
				/>
			</div>
		);
	});
	return (
		<div className="habit-board">
			<Header title={'Habit Tracker'} totalHabits={habitList.length} />

			{/* Habit List */}
			{habits}
			<form action="submit">
				<label htmlFor="newHabit">Add a Habit</label>
				<input
					type="text"
					id="newHabit"
					onChange={handleInputChange}
					value={userInput}
				/>
				<button onClick={handleSubmit}>Add Habit</button>
			</form>
			{console.log(habitList)}
			<BarChart data={habitList} />
			<PieChart data={habitList} />
			<LineChart data={habitList} />
		</div>
	);
}

export default App;
