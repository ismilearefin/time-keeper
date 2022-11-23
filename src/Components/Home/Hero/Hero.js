import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed "
      style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/black-friday--d_2000x.progressive.jpg?v=1667848335")` }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">TimeKeeper</h1>
          <p className="mb-5">
            BLACK FRIDAY WEEKS CHECK OUR <span className="text-red-600">HOT DEALS</span> 
          </p>
          <button className="btn btn-primary bg-black text-white rounded-none">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
