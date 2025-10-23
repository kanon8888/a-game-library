
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../assets/logo.jpeg";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);

    // Demo logout handler
    const handleLogout = () => {
        setUser(null);
        console.log("User logged out!");
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Games", path: "/games" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md px-6">
            {/* Left: Logo */}
            <div className="navbar-start">
                <div className="flex items-center gap-3">
                    <img src={logoImage} alt="Logo" className="w-12 h-12 rounded-full" />
                    <h2 className="font-bold text-xl">GameHub</h2>
                </div>
            </div>

            {/* Middle: Nav Links */}
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

            {/* Right: User Info or Login */}
            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <>
                        <div className="flex items-center gap-2">
                            <img
                                src={user.photoURL || "https://i.ibb.co/0jXk8G2/user.png"}
                                alt="user"
                                className="w-10 h-10 rounded-full border"
                            />
                            <div>
                                <p className="text-sm font-semibold">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-sm btn-outline">
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






// import React, { use } from "react";
// import { NavLink } from "react-router-dom";
// import logoImage from "../assets/logo.jpeg";
// import { Link } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";


// const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Games", path: "/games" },
//     { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//     const { user } = use(AuthContext);
//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">{user && user.email}
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </label>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//                     >
//                         {navLinks.map((link) => (
//                             <li key={link.path}>
//                                 <NavLink
//                                     to={link.path}
//                                     className={({ isActive }) =>
//                                         isActive ? "text-blue-500 font-bold underline" : "hover:text-blue-500"
//                                     }
//                                 >
//                                     {link.name}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>


//                 <div>
//                     <img className="w-[90px] h-[90px] rounded-full" src={logoImage} alt="Logo" />
//                 </div>
//             </div>

//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navLinks.map((link) => (
//                         <li key={link.path}>
//                             <NavLink
//                                 to={link.path}
//                                 className={({ isActive }) =>
//                                     isActive ? "text-blue-500 font-bold underline" : "hover:text-blue-500"
//                                 }
//                             >
//                                 {link.name}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="navbar-end">
//                 <Link to="/auth/login">
//                     <a className="btn">Login</a>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

