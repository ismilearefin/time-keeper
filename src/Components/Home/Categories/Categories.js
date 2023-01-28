import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Categories = ({ Scrollref }) => {
    
    const { data, isLoading } = useQuery({
    queryKey: ["categoris"],
    queryFn: () =>
      fetch("https://timekeeper-server.vercel.app/categoris").then((res) =>
        res.json()
      ),
  });

  if(isLoading){
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
    <div
      ref={Scrollref}
      className="lg:flex md:hero bg-no-repeat bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/1593/9031/files/Rolex-GMT-Master-II-2_1024x.progressive.webp.jpg?v=1661079448")`,
      }}
    >
      <div className="md:w-1/2 text-center">
        <h1
          className="text-5xl text-white font-light py-4"
          style={{
            background:
              "radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        >
          OUR CATEGORIES
        </h1>
      </div>
      <div className=" md:w-1/2 min-h-screen grid md:grid-cols-2 ">
        {data?.map((Category, i) => (
          <div
          key={i}
          className="transform transition duration-500  hover:border-white hover:z-10 h-full border-2 border-zinc-800 text-center grid font-light justify-center items-center text-3xl  hover:text-white"
          >
            <Link
            style={{
                 background:
                   "radial-gradient(circle,rgba(23, 19, 10, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)",
               }}
            to={`/category/${Category.Category}`}
            
            className="w-52 py-3"
          >
            {Category.Category}
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

// 