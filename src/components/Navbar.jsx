

import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../assets/logo.jpeg";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log("User logged out!"))
            .catch((err) => console.error(err));
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Games", path: "/games" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md px-6">

           
            <div className="navbar-start flex items-center gap-3">
                <Link to={user ? "/profile" : "/"}>
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="w-12 h-12 rounded-full cursor-pointer"
                    />
                </Link>
                <h2 className="font-bold text-xl">GameHub</h2>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-500 font-semibold underline"
                                        : "hover:text-blue-400"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            
            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <>
                        
                        <Link to="/profile">
                            <img
                                title={user.displayName} 
                                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                                alt="user"
                                className="w-10 h-10 rounded-full border border-blue-500 cursor-pointer"
                            />
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/auth/login" className="btn btn-sm btn-primary">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

















