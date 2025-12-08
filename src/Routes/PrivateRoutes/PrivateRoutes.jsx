import React, { Children, use} from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = use(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    
    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;