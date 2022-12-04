import { useState } from 'react';
import Counter from './Counter';

const Habit = ({
	habitName,
	score,
	handleRemove,
	habitKey,
	handleScoreChange,
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
				handleScoreChange={handleScoreChange}
				habitKey={habitKey}
			/>
		</div>
	);
};

export default Habit;
