import React, { useContext } from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import { Authcontext } from '../../../Contextprovidor/Contextprovidor';
import {RotatingLines } from  'react-loader-spinner'


const Myorders = () => {
    const {user} = useContext(Authcontext)
    // const queryClient = useQueryClient()

    const {data, isLoading}= useQuery({
        queryKey:['bookedproduct', user.email],
        queryFn: () => fetch(`http://localhost:5000/bookedproduct?email=${user.email}`)
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
                        <th>Job</th>
                        <th>Favorite Color</th>
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
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={bookedProduct.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                </div>
                                </td>
                                <td>
                                {bookedProduct.itemName}
                                </td>
                                <td>$ {bookedProduct.price}</td>
                                <th>
                                <button className="btn btn-info btn-xs">Pay</button>
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