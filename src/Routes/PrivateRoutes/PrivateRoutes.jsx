import React, { Children, use } from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user} = use(AuthContext)
    
    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;