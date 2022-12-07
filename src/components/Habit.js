import Counter from './Counter';

const Habit = ({
	habitName,
	score,
	handleRemove,
	habitKey,
	incrementScore,
	decrementScore,
}) => {
	return (
		<div className="habit">
			<span className="habit-name">
				<button
					className="remove-habit"
					onClick={() => handleRemove(habitKey)}
				>
					✖
				</button>
				{habitName}
			</span>
			<Counter
				score={score}
				incrementScore={() => incrementScore(habitKey, 1)}
				decrementScore={() => decrementScore(habitKey, -1)}
				habitKey={habitKey}
				key={habitKey}
			/>
		</div>
	);
};

export default Habit;
