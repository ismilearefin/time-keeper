import React from 'react';
import { Link } from 'react-router-dom';

const PremiumSec = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat text-center min-h-screen  bg-fixed'
        style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/Roger_Dubuis_Tourbillon_1a41f870-45f1-454d-9f2e-4e4a3bab2061_1920x.progressive.jpg?v=1641829822")` }}
        >
            <h1 className='w-1/2 text-5xl lg:text-6xl text-white font-light py-2 my-2'
            style={{background:"radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)"}}
            >PREMIUM</h1>
            <p
            className='w-1/2 text-2xl text-white font-light py-2 my-2'
            style={{background:"radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)"}}
            >Buy most exclusive watches</p>
            <Link to='/category/Premium' className='btn btn-primary bg-black text-white rounded-none my-8 px-6'>EXPLORE NOW</Link>
        </div>
    );
};

export default PremiumSec;