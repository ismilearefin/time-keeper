import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            s
        </div>
    );
};

export default Payment;