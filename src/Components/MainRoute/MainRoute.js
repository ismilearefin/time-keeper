import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';

const MainRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainRoute;