import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return (<div className='flex justify-center items-center min-h-screen'><RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        /></div>)
    }
    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-black mb-4 text-2xl font-light uppercase">Payment for {data.pro_name}</h1>
        <div className="w-1/2 bg-white text-black h-48">
        <Elements stripe={stripePromise}>
            <CheckOutForm 
            data={data}
            />
        </Elements>
        </div>
        </div>
    );
    };

export default Payment;
