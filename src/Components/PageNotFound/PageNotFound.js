import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div 
        className='hero min-h-screen items-end'
        style={{ backgroundImage: `url("https://www.simicart.com/blog/wp-content/uploads/pwa-offline-featured-image.png")` }}
        >
            <Link to='/' className='link text-white mb-10'>Go Back</Link>
        </div>
    );
};

export default PageNotFound;