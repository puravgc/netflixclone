import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDJlvth6Y1n11PFphMLIiAzHWfNH14HS4E",
  authDomain: "netflixmain-a39d7.firebaseapp.com",
  projectId: "netflixmain-a39d7",
  storageBucket: "netflixmain-a39d7.appspot.com",
  messagingSenderId: "410904384601",
  appId: "1:410904384601:web:62c5b25152c4fa16034d48"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }