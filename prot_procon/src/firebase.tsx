// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDcPZ4tIcINv4rq-4FGG6CBPJp4SqAwQVU",
	authDomain: "kosenprocon2024.firebaseapp.com",
	projectId: "kosenprocon2024",
	storageBucket: "kosenprocon2024.appspot.com",
	messagingSenderId: "54700255490",
	appId: "1:54700255490:web:b10d7eca66c36cbe1e7a1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
