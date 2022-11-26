import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

const AllSellers = () => {
    const {data, isLoading, refetch} = useQuery({
        queryKey : ['allseller'],
        queryFn : () => fetch('http://localhost:5000/users/allseller')
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
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }
    
    function handleVerify(email){
        fetch(`http://localhost:5000/allproducts/verify/${email}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data=> {
            if(data.acknowledged){
                refetch()
                toast.success('Seller is now Verified ')
            }
        })
    }


    return (
        <div>
            <h1 className='text-center text-white uppercase text-2xl font-light'>All Sellers</h1>
            <div className="overflow-x-auto">
    <table className="table w-full">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Delete</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {
            data.map((seller, i) => <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                <button onClick={()=>handleDelete(seller._id)} className='btn bg-rose-800 btn-sm'>X</button>
                </td>
                <td>
                <button onClick={()=>handleVerify(seller.email)} className='btn bg-sky-500 text-white btn-sm'>verify</button>
            </td>
            </tr>)
        }
        </tbody>
    </table>
    </div>
    <Toaster></Toaster>
        </div>
    );
};

export default AllSellers;