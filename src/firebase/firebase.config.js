// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqu6lkJ9IAEvsin1KQv8lNQYrVwKDfxo",
  authDomain: "a-game-library-8051b.firebaseapp.com",
  projectId: "a-game-library-8051b",
  storageBucket: "a-game-library-8051b.appspot.com",
  messagingSenderId: "553627909511",
  appId: "1:553627909511:web:bcbd639642b4eb4700a722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;















