import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;