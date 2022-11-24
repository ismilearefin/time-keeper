import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const DashboardRoute = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-10">
            <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-72 bg-white font-bold text-base-content">
                <li><Link to='/dasboard/myorders'>My Orders</Link></li>
                <li><Link to='/dasboard/addproduct'>Add Product</Link></li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardRoute;