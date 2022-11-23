import React from 'react';
import Advertise from './AdvertiseSec/Advertise';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';
import InfoSec from './InfoSec/InfoSec';
import PremiumSec from './PremiumSec/PremiumSec';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoSec></InfoSec>
            <Advertise></Advertise>
            <Categories></Categories>
            <PremiumSec></PremiumSec>
        </div>
    );
};

export default Home;