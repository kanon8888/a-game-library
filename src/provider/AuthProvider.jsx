import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    const loginUser = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);
    const googleLogin = () => signInWithPopup(auth, googleProvider);
    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
            setUser(currentUser)
        );
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, setUser, registerUser, loginUser, googleLogin, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;








