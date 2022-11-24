import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal/Modal";

const ShowCategory = () => {
    const products = useLoaderData();
    const [productInfo , setProductInfo] = useState([])
    console.log(productInfo)
    function handleModal(product){
        setProductInfo(product)
    }
    
    return (
        <div className="bg-white">
        <h1 className="text-4xl font-light text-center pt-10">{products[0]?.category} Category</h1>
        <div className="md:flex justify-center items-center my-4 gap-5">
        { products &&
        
        products.map((product) => (
            <div key={product._id} className="card text-center w-96 bg-base-100 shadow-xl rounded-none my-10">
            <figure>
                <img src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {product.pro_name}
                <div className="badge badge-secondary">{product.condition}</div>
                </h2>
                <p>{product.dis.length > 40 ? product.dis.slice(1, 39) + '...' : product.dis}</p>
                <div className="card-actions justify-between">
                <div className="badge w-full rounded-none">Orginal Price : {product.orinal_price} </div>
                <div className="badge  w-full rounded-none">Resale Price : {product.resale_price} </div>
                <div className="badge  w-full rounded-none">Year of use : {product.year_of_use} </div>
                <div className="badge  w-full rounded-none">Location : {product.location} </div>
                <label htmlFor="my-modal-3" onClick={()=>handleModal(product)} className="btn btn-primary btn-sm  bg-black text-white rounded-none w-full">BOOK NOW</label>
                </div>
            </div>
            </div>
        ))}
        </div>
        <Modal 
        productInfo={productInfo}
        ></Modal>
        </div>
    );
};

export default ShowCategory;
