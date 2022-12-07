import '../App.css';
import Habit from './Habit';
import { firestoreDB } from '../firebase';
import { addToFirestoreDB } from '../firestore';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const DisplayHabits = ({ habitList, setHabitList }) => {
	const [userInput, setUserInput] = useState('');
	const [isHighScore, setHighScore] = useState();

	useEffect(() => {
		const scores = habitList.map((habit) => habit.amount);
		// return the highest amount
		const maxScore = Math.max(...scores);
		setHighScore(maxScore);
	}, [habitList]);

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (userInput.trim() && userInput.length < 20)
			addToFirestoreDB(userInput, setHabitList, habitList);
		else alert('Please enter a valid habit name between 1 - 20 characters');

		setUserInput('');
	};

	// this event will fire when the Remove button is clicked
	const handleRemove = async (id) => {
		await deleteDoc(doc(firestoreDB, 'habits', id));
	};

	// Increment score by 1
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

	return (
		<>
			<ul>
				{habitList.map((habit) => {
					return (
						<li>
							<Habit
								key={habit.id}
								habitKey={habit.id}
								habitName={habit.name}
								score={habit.amount}
								handleRemove={() => handleRemove(habit.id)}
								incrementScore={() =>
									incrementScore(habit.id, habit.amount)
								}
								decrementScore={() =>
									decrementScore(habit.id, habit.amount)
								}
								isHighScore={
									habit.amount === isHighScore && isHighScore !== 0
								}
							/>
						</li>
					);
				})}
			</ul>

			<form className="habit-form">
				<label className="habit-label" htmlFor="newHabit">
					Add a Habit
				</label>
				<input
					className="habit-input"
					type="text"
					id="newHabit"
					onChange={handleInputChange}
					value={userInput}
				/>
				<Button
					variant="contained"
					className="submit"
					onClick={handleSubmit}
				>
					Add Habit
				</Button>
			</form>
		</>
	);
};

export default DisplayHabits;
