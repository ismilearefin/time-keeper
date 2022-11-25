import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './AdvertiseSec/Advertise';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';
import InfoSec from './InfoSec/InfoSec';
import PremiumSec from './PremiumSec/PremiumSec';

const Home = () => {
    const {data , isLoading} = useQuery({
        queryKey : ['advertise'],
        queryFn : () => fetch('http://localhost:5000/allproducts/advertise')
        .then(res => res.json())
        })
    return (
        <div>
            <Hero></Hero>
            <InfoSec></InfoSec>
            {
                data.length > 0 && <Advertise 
                data={data}
                isLoading={isLoading}
                ></Advertise>
            }
            <Categories></Categories>
            <PremiumSec></PremiumSec>
        </div>
    );
};

export default Home;