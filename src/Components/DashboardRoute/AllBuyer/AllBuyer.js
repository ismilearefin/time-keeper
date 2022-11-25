import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const AllBuyer = () => {

    const {data, isLoading, refetch} = useQuery({
        queryKey : ['allBuyer'],
        queryFn : () => fetch('http://localhost:5000/users/allbuyer')
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

    return (
        <div>
            <h1 className='text-center text-white uppercase text-2xl font-light'>All Buyers</h1>
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((user, i)=> <tr key={user._id}>
                        <th>{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={()=>handleDelete(user._id)} className='btn bg-rose-800 btn-sm'>X</button>
                            </td>
                    </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllBuyer;