import { Pie } from 'react-chartjs-2';

// eslint-disable-next-line
import Chart from 'chart.js/auto';

export function PieChart({ data }) {
	const names = data.map((item, id) => {
		return item.name;
	});

	const amounts = data.map((item, id) => {
		return item.amount;
	});

	const colors = [
		'rgba(255, 99, 132, 0.7)',
		'rgba(54, 162, 235, 0.7)',
		'rgba(255, 206, 86, 0.7)',
	];

	const chartData = {
		labels: names,
		datasets: [
			{
				label: 'total',
				data: amounts,
				backgroundColor: colors,
			},
		],
	};

	return (
		<div>
			<Pie
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

// const chartToDestroy = PieChart();
// chartToDestroy.destroy();
