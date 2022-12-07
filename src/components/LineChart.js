import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

export function LineChart({ data }) {
	// create an array with months as strings
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	console.log(data.filter((item) => item.date.month === 12));

	const colors = [
		'rgba(255, 99, 132, 0.7)',
		'rgba(54, 162, 235, 0.7)',
		'rgba(255, 206, 86, 0.7)',
	];

	const chartData = {
		labels: months,
		datasets: [
			{
				label: 'Total habits completed',
				data: [42, 23, 34, 76, 98, 45, 67, 23, 45, 56, 12, 8],
				backgroundColor: colors,
			},
		],
	};

	return (
		<div>
			<Line
				data={chartData}
				width={100}
				height={500}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
}
