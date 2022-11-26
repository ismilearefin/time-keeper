import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Contextprovidor/Contextprovidor';

const SellerPrivateRoute = ({children}) => {
    const {user} = useContext(Authcontext)
    const location = useLocation();
    const {data, isLoading} = useQuery({
        queryKey : ['users', user.email],
        queryFn : () => fetch(`http://localhost:5000/users?email=${user.email}`)
        .then(res => res.json())
        
    })

    if(isLoading){
        return (<div className='flex justify-center items-center min-h-screen'><RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        /></div>)
    }

    if(data[0]?.userRole === 'Seller'){
        return children
    }
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerPrivateRoute;