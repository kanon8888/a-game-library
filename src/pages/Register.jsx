

import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { registerUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        
        if (!/(?=.*[A-Z])/.test(password))
            return setError("Password must contain at least 1 uppercase letter");
        if (!/(?=.*[a-z])/.test(password))
            return setError("Password must contain at least 1 lowercase letter");
        if (password.length < 6)
            return setError("Password must be at least 6 characters");

        registerUser(email, password)
            .then((result) => {
                const user = result.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        setError("");
                        navigate("/auth/login"); 
                    })
                    .catch((err) => setError(err.message));
            })
            .catch((err) => setError(err.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => navigate("/"))
            .catch((err) => setError(err.message));
    };

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center mb-3">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="input mb-2"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="input mb-2"
                        required
                    />
                    <input
                        name="photoURL"
                        type="text"
                        placeholder="Photo URL"
                        className="input mb-2"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="input mb-2"
                        required
                    />
                    <p className="text-red-500 mb-2">{error}</p>
                    <button type="submit" className="btn btn-neutral w-full mb-2">
                        Register
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full"
                    >
                        Register with Google
                    </button>
                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-blue-500">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;












