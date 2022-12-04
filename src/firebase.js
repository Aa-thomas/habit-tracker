// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBYThwGnq_auMj5xRaq3gptA_WG1DdpxWU',
	authDomain: 'habit-tracker-fs.firebaseapp.com',
	projectId: 'habit-tracker-fs',
	storageBucket: 'habit-tracker-fs.appspot.com',
	messagingSenderId: '81169445377',
	appId: '1:81169445377:web:7e0250ffdbcfa6ba6b0600',
	measurementId: 'G-5ZFFYXWJYX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
