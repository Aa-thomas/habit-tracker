import './App.css';
import { useState, useEffect } from 'react';
import { BarChart } from './components/BarChart';
import { PieChart } from './components/PieChart';
import { LineChart } from './components/LineChart';
import Chart from 'chart.js/auto';
import { Routes, Route } from 'react-router-dom';
import DisplayHabits from './components/DisplayHabits';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from './firebase';
import Header from './components/Header';

function App() {
	const [habitList, setHabitList] = useState([]);

	const collectionRef = collection(firestoreDB, 'habits');

	useEffect(() => {
		const getHabits = async () => {
			const data = await getDocs(collectionRef);
			setHabitList(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		getHabits();

		onSnapshot(collectionRef, (snapshot) => {
			setHabitList(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		});

		console.log('habitList', habitList);
	}, []);

	return (
		<div className="habit-board">
			<Header title={'Habit Tracker'} totalHabits={habitList.length} />
			<Routes>
				<Route
					path="/"
					element={
						<DisplayHabits
							habitList={habitList}
							setHabitList={setHabitList}
						/>
					}
				/>
				<Route path="/barchart" element={<BarChart data={habitList} />} />
				<Route path="/piechart" element={<PieChart data={habitList} />} />
				<Route path="/linechart" element={<LineChart data={habitList} />} />
			</Routes>
		</div>
	);
}

export default App;
