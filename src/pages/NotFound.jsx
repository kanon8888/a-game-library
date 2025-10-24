

import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/App-Error.png"; 

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img src={notFoundImage} alt="404 Not Found" className="w-80 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-600 mb-6">
                Looks like the page you are looking for does not exist.
            </p>
            <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;




