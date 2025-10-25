import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigation } from 'react-router';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation()
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
                {import.meta.env.VITE_name}
            </header>

            <main className="flex-grow">
                {state == "loading" ? <Loading /> : <Outlet />}
            </main>


            <Footer />
        </div>
    );
};

export default HomeLayout;









