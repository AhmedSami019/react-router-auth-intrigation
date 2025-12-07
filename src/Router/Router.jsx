import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Orders from '../Pages/Orders/Orders';
import Profile from '../Pages/Profile/Profile';
import PrivateRoutes from '../Routes/PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true, 
                Component: Home
            },
            {
                path: "login",
                Component: Login
            }, 
            {
                path: "register", 
                Component: Register
            },
            {
                path: "orders",
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path: "profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])

export default router;