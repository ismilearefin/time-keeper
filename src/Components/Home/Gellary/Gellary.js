import React from 'react';

const Gellary = () => {
    return (
        
        <div className='flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat text-center h-96  bg-fixed'
        style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/BD-wristgame_8a85345c-5477-473c-b4d6-f18e14dacccd_1920x.progressive.jpg?v=1614292750")` }}
        >
            <h1 className='w-1/2 text-5xl lg:text-6xl text-white font-light py-2 my-2 uppercase'
            style={{background:"radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)"}}
            >gallery</h1>
            <p
            className='w-1/2 text-2xl text-white font-light py-2 my-2'
            style={{background:"radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)"}}
            >Buy most exclusive watches</p>
        </div>
        
    );
};

export default Gellary;