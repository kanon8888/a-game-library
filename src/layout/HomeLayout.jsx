import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <mine>
                <section>
                    <Outlet></Outlet>
                </section>

                <section className='sidebare'>

                </section>
            </mine>
        </div>
    );
};

export default HomeLayout;