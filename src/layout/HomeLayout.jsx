import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Hero from '../pages/Hero';

const HomeLayout = () => {
    return (
        <div>
            <header> 
                <Navbar></Navbar>
            </header>
            <mine>
                <section>
                    <Home></Home>
                    <Hero></Hero>
                </section>
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