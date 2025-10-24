import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Footer import

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer সব পেজে থাকবে */}
            <Footer />
        </div>
    );
};

export default HomeLayout;









