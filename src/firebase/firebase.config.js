// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsBz1ErMGeho6UzW3EV_gTvo3rnzbBQPA",
  authDomain: "the-news-dragon-ba677.firebaseapp.com",
  projectId: "the-news-dragon-ba677",
  storageBucket: "the-news-dragon-ba677.appspot.com",
  messagingSenderId: "397948351372",
  appId: "1:397948351372:web:5379cdab10994f92b85ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;