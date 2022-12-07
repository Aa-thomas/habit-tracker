import Counter from './Counter';
import HighScore from './HighScore';

const Habit = ({
	habitName,
	score,
	handleRemove,
	habitKey,
	incrementScore,
	decrementScore,
	isHighScore,
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
				<HighScore isHighScore={isHighScore} />
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
