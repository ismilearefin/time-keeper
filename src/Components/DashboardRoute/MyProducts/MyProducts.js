import React, { useContext } from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import { Authcontext } from '../../../Contextprovidor/Contextprovidor';
import {RotatingLines } from  'react-loader-spinner'
import toast from 'react-hot-toast';


const MyProducts = () => {
    const {user} = useContext(Authcontext)

    const {data, isLoading, refetch}= useQuery({
        queryKey:['myproducts', user.email],
        queryFn: () => fetch(`http://localhost:5000/allproducts/myproducts?email=${user.email}`)
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

function handleDelete(_id){
    fetch(`http://localhost:5000/allproducts/${_id}`, {
            method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success('Deleted successfully')
            refetch()
        }
    })
}

function handleAdvertise(id){
    fetch(`http://localhost:5000/allproducts/advertise/${id}`, {
        method : 'PUT'
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success('Advertised Mood on')
            refetch()
        }
    })

}

    return (
        <div>
            <div className="overflow-x-auto w-full">
    <table className="table w-full">
        <thead>
        <tr>
            <th>
                Status
            </th>
            <th>Image</th>
            <th>Name & Price</th>
            <th>Delete</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                data.map(product => <tr key={product._id}>
                    <th>
                        {
                            product?.status ? 
                            <p className='text-rose-600'>Sold</p>
                            :
                            <p className='text-green-600'>Available</p>
                        }
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                    </div>
                    </td>
                    <td>
                    {product.pro_name}
                    <br/>
                    <span className="badge badge-ghost badge-sm">${product.resale_price}</span>
                    </td>
                    <td><button onClick={()=>handleDelete(product._id)} className='btn bg-rose-800 btn-xs text-white'>X</button></td>
                    <th>
                        {
                            product?.advertise ?
                           <button className='btn btn-xs text-rose-800'>Advertised</button>
                           : 
                           <button onClick={()=>handleAdvertise(product._id)} className="btn btn-xs text-sky-400">Advertise</button>
                        }
                    </th>
                </tr> )
            }
        </tbody>
    </table>
        </div>
        </div>
    );
};

export default MyProducts;