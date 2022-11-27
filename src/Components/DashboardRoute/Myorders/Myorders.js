import React, { useContext } from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import { Authcontext } from '../../../Contextprovidor/Contextprovidor';
import {RotatingLines } from  'react-loader-spinner'
import { Link } from 'react-router-dom';


const Myorders = () => {
    const {user} = useContext(Authcontext)
    // const queryClient = useQueryClient()

    const {data, isLoading}= useQuery({
        queryKey:['allproducts', user?.email],
        queryFn: () => fetch(`http://localhost:5000/allproducts/order?email=${user?.email}`)
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

console.log(data)

    return (
        <div>
            <h1 className='text-center text-white uppercase text-2xl font-light'>My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(bookedProduct => <tr key={bookedProduct._id}>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask w-12 h-12">
                                        <img src={bookedProduct.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                </div>
                                </td>
                                <td>
                                {bookedProduct.pro_name}
                                </td>
                                <td>$ {bookedProduct.resale_price}</td>
                                <th>
                                {bookedProduct.paid ? 
                                <p className='text-green-500'>Paid</p> :
                                <Link to={`/dasboard/payment/${bookedProduct._id}`} className="btn btn-info btn-xs rounded-none">Pay</Link>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;