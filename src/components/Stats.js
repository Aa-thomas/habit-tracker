const Stats = ({ habitList }) => {
	const totalHabits = habitList.length;
	const totalScore = [...habitList].reduce((total, currentTotal) => {
		return total + currentTotal.amount;
	}, 0);

	return (
		<table className="stats">
			<tbody>
				<tr>
					<td>Habits Being Tracked:</td>
					<td>{totalHabits}</td>
				</tr>
				<tr>
					<td>Total Points:</td>
					<td>{totalScore}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Stats;
