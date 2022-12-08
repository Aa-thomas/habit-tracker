// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCAUkZJLEl8Xa0NenTQTpeIqCe3RDgYjnw',
	authDomain: 'expense-tracker-88ec0.firebaseapp.com',
	projectId: 'expense-tracker-88ec0',
	storageBucket: 'expense-tracker-88ec0.appspot.com',
	messagingSenderId: '683577511790',
	appId: '1:683577511790:web:7d900e1336d47dc9e4bb7f',
	measurementId: 'G-89WQ1E52J5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestoreDB = getFirestore(app);
