import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    
    const {data=[]} = useQuery({
        queryKey :['categoris'],
        queryFn: ()=>fetch('http://localhost:5000/categoris')
        .then(res => res.json())
    })

    return (
        <div 
        className='flex w-full hero min-h-screen' 
        style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/Rolex-GMT-Master-II-2_1024x.progressive.webp.jpg?v=1661079448")` }}>
            <div className='w-1/2 text-center'>
                <h1 className='text-5xl text-white font-light py-4' 
                style={{background:"radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)"}}>
                    OUR CATEGORIES
                </h1>
            </div>
            <div className='w-1/2 min-h-screen grid grid-cols-2'>
                {
                    data?.map((Category , i)=> <Link to={`/category/${Category.Category}`} key={i} className='h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-2xl  hover:text-white'>
                    {Category.Category}
                </Link> )
                }
            </div>
        </div>
    );
};


export default Categories;