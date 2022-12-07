const Counter = ({ score, habitKey, incrementScore, decrementScore }) => {
	return (
		<div className="counter">
			<button
				className="counter-action decrement"
				onClick={() => decrementScore(habitKey, score)}
			>
				{' '}
				-{' '}
			</button>
			<span className="counter-score">{score}</span>
			<button
				className="counter-action increment"
				onClick={() => incrementScore(habitKey, score)}
			>
				{' '}
				+{' '}
			</button>
		</div>
	);
};

export default Counter;
