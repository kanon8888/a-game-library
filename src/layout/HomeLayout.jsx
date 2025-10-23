import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            
            <header>
                <Navbar />
            </header>

            
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default HomeLayout;






