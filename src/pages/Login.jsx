import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => navigate("/"))
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
                <h2 className="font-semibold text-2xl text-center mb-3">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <input name="email" type="email" placeholder="Email" className="input mb-2" required />
                    <input name="password" type="password" placeholder="Password" className="input mb-2" required />
                    <p className="text-red-500 mb-2">{error}</p>
                    <button type="submit" className="btn btn-neutral w-full mb-2">Login</button>
                    <button type="button" onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        Login with Google
                    </button>
                    <p className="text-center mt-4">
                        Don't have an account? <Link to="/auth/register" className="text-blue-500">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;







