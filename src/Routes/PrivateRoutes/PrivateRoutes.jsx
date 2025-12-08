import React, { Children, use} from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()
    console.log(location);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;