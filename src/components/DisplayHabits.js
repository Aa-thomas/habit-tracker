import { getDatabase, ref, remove } from 'firebase/database';
import app from '../firebase';
import Habit from './Habit';

const DisplayHabits = ({ data }) => {
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

	return (
		<ul>
			{data.map((habit) => {
				return (
					<Habit
						key={habit.key}
						habitKey={habit.key}
						habitName={habit.name}
						handleRemove={() => handleRemove(habit.key)}
					/>
				);
			})}
		</ul>
	);
};

export default DisplayHabits;
