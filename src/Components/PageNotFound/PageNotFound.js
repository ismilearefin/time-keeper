import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div 
        className='hero min-h-screen items-end'
        style={{ backgroundImage: `url("https://techpulse.be/wp-content/uploads/2022/04/404.jpg")` }}
        >
            <Link to='/' className='btn text-white mb-2'>Go Back</Link>
        </div>
    );
};

export default PageNotFound;