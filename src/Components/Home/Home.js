import { useQuery } from "@tanstack/react-query";
import React, {useRef} from "react";
import { RotatingLines } from "react-loader-spinner";
import Advertise from "./AdvertiseSec/Advertise";
import Categories from "./Categories/Categories";
import Gellary from "./Gellary/Gellary";
import Hero from "./Hero/Hero";
import InfoSec from "./InfoSec/InfoSec";
import PremiumSec from "./PremiumSec/PremiumSec";

const Home = () => {
  const ref = useRef(null);
  const handleScrollToCategory = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
        fetch("https://timekeeper-server.vercel.app/allproducts/advertise")
        .then(res=> res.json())
    }
  );


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div>
      <Hero handleScrollToCategory={handleScrollToCategory}></Hero>
      <InfoSec></InfoSec>
      <Gellary></Gellary>
      <Categories Scrollref={ref}></Categories>
      {data?.length > 0 && (
        <Advertise data={data} isLoading={isLoading}></Advertise>
      )}
      <PremiumSec></PremiumSec>
    </div>
  );
};

export default Home;
