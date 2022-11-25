// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Advertise = ({data, isLoading}) => {
 

  if(isLoading){
    return (<div className='flex justify-center items-center min-h-screen'><RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
    /></div>)
  }
console.log(data)
    return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-bold mb-10">
      OUR <span className="text-red-600">HOT DEALS</span>
      </p>
      <div className="md:flex justify-center items-center my-4 gap-5 ">
        {
          data.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure>
            <img className="w-full h-72" src={product.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.pro_name}
              <div className="badge badge-secondary">{product.condition}</div>
            </h2>
            <p>{product.dis}</p>
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline rounded-none text-rose-700">Orginal price: ${product.orginal_price}</div>
              <div className="badge badge-outline rounded-none text-white">Price Now : ${product.resale_price}</div>
            </div>
          </div>
        </div>)
        }
        
        
      </div>
    </div>
    );
};

export default Advertise;
