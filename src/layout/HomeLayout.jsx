import React from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Hero from "../pages/Hero";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <Home />
                    <Hero />
                </section>
                <section>
                    <Outlet />
                </section>
                <section className="sidebar">
                    
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;

