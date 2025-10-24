import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
                
                <div>
                    <h3 className="text-xl font-bold mb-3">GameHub</h3>
                    <p className="text-gray-400">
                        Your ultimate hub for latest games, updates, and exclusive offers.
                        Stay connected and never miss out!
                    </p>
                </div>

                
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/games" className="hover:text-blue-500">
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-500">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-500">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="hover:text-blue-500"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8">
                &copy; {new Date().getFullYear()} GameHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
