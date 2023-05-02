import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
   const location = useLocation();
   const { user , loading } = useContext(AuthContext)
    if(loading){
        return <div style={{height :'600px', display: 'flex' , alignItems :'center' , justifyContent : 'center'}}><Spinner animation="border" variant="info" /></div>
    }
    if(user){
        return children ;
    }
    return <Navigate to='/login' state={{from : location }} replace></Navigate>
};

export default PrivateRoutes;