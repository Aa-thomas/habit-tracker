import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { firestoreDB } from './firebase';

// import { getDownloadURL } from '../../habit-app/firebase/storage';

const nameOfCollection = `habits`;

export function addToFirestoreDB(params, setHabitList, habitList) {
	const data = {
		name: params,
		amount: 0,
		date: {
			day: new Date().getDate(),
			month: new Date().getMonth() + 1,
			year: new Date().getFullYear(),
		},
	};
	addDoc(collection(firestoreDB, nameOfCollection), data);
	setHabitList([...habitList, data]);
}

export function deleteFromFirestoreDB(id) {
	deleteDoc(doc(firestoreDB, nameOfCollection), id);
}
