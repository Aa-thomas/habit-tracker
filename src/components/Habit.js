import { useState } from 'react';

const Habit = ({ data, key, habitName, handleRemove }) => {
	const [count, setCount] = useState(0);
	const [completed, setCompleted] = useState(false);

	const handleCompleted = () => {
		setCompleted(!completed);
		setCount(count + 1);
		console.log(completed);
	};

	return (
		<li key={key}>
			<p>{habitName}</p>
			<p>
				{count} {completed}
			</p>
			<button onClick={handleCompleted}>Completed</button>
			<button onClick={() => handleRemove(key)}>Remove</button>
		</li>
	);
};

export default Habit;
