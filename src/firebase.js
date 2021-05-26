import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyApVTcGqx9zb7BYObvo70ukVNii8GNGXLw",
	authDomain: "challenge-22f78.firebaseapp.com",
	projectId: "challenge-22f78",
	storageBucket: "challenge-22f78.appspot.com",
	messagingSenderId: "1089443446378",
	appId: "1:1089443446378:web:2c0d75a19f921308779413",
	measurementId: "G-HE5E43RY2J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// real time db
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth,db};