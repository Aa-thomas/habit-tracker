const Habit = ({ count, updateCount, habitKey, habitName, handleRemove }) => {
	return (
		<li>
			<p>{habitName}</p>
			<p>{count}</p>
			<button onClick={() => updateCount(habitKey, +1)}>up</button>
			<button onClick={() => updateCount(habitKey, -1)}>down</button>
			<button onClick={() => handleRemove(habitKey)}>Remove</button>
		</li>
	);
};

export default Habit;
