import { getDatabase, ref, remove, set, update, push } from 'firebase/database';
import app from '../firebase';
import Habit from './Habit';

const DisplayHabits = ({ habitList, setHabitList }) => {
	// this event will fire when the Remove button is clicked
	const handleRemove = (key) => {
		console.log(key);
		// create a reference to our database
		// this time though, instead of pointing at the whole database, we make our dbRef point to the specific node of the book we want to remove
		const database = getDatabase(app);
		const dbRef = ref(database, `/${key}`);

		// remove the item from the database
		remove(dbRef);
	};

	const handleScoreChange = (key, delta) => {
		console.log('handleScore fired');
		setHabitList((prevHabits) =>
			prevHabits.map((habit) => {
				if (habit.key === key) {
					return {
						name: habit.name,
						score: habit.score + delta,
						key: habit.key,
					};
				}
				return habit;
			})
		);
	};

	let habits = habitList.map((habit) => {
		console.log('habitList Rerendered');
		return (
			<Habit
				key={habit.key}
				habitKey={habit.key}
				habitName={habit.name}
				score={habit.score}
				handleRemove={() => handleRemove(habit.key)}
				handleScoreChange={handleScoreChange}
			/>
		);
	});

	return <ul>{habits}</ul>;
};

export default DisplayHabits;
