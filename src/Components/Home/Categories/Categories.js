import React from 'react';

const Categories = () => {
    return (
        <div 
        className='flex w-full hero min-h-screen' 
        style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/Rolex-GMT-Master-II-2_1024x.progressive.webp.jpg?v=1661079448")` }}>
            <div className='w-1/2 text-center'>
                <h1 className='text-4xl text-white '>
                    OUR CATEGORIES
                </h1>
            </div>
            <div className='w-1/2 min-h-screen grid grid-cols-2'>
                <div className='h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-2xl  hover:text-white'>
                    <h1>PREMIUM</h1>
                </div>
                <div className='h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-2xl  hover:text-white'>KIDS</div>
                <div className='h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-2xl  hover:text-white'>MENS</div>
                <div className='h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-2xl  hover:text-white'>LADIES</div>
            </div>
        </div>
    );
};

export default Categories;