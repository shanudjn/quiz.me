import React from 'react'
import { Navigate, Route } from 'react-router';
import { useAuth } from '../../Context/auth-context';


export default function PrivateRoute({ path, ...props }) {
    const { isUserLoggedIn } = useAuth();
    console.log("isUserLoggedIn", isUserLoggedIn)
    return isUserLoggedIn ? <Route {...props} path={path} /> : <Navigate state={{ from: path }} replace to="/login" />
}
