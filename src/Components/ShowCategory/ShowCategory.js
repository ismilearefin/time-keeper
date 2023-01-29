import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Modal from "./Modal/Modal";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const ShowCategory = () => {
  const navigation = useNavigation();
  const products = useLoaderData();
  const [productInfo, setProductInfo] = useState([]);
  const [modal, setmodal] = useState(true);

  if (navigation.state === "loading") {
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

  function handleModal(product) {
    setProductInfo([]);
    return setProductInfo(product);
  }

  function handleReportedItems(id) {
    fetch(`https://timekeeper-server.vercel.app/allproducts/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Submit your report request");
        } else {
          toast.error("already reported");
        }
      });
  }

  
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-light text-center pt-10">
        {products[0]?.category} Category
      </h1>
      <div className="md:flex justify-center items-center my-4 gap-5">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="card text-center w-96 bg-base-100 shadow-xl rounded-none my-10"
            >
              <div className="flex justify-between mx-1">
                <div className="flex gap-2">
                  <p>{product.seller_name}</p>
                  {product.user_status && (
                    <FaCheckCircle className="mt-1 text-sky-500"></FaCheckCircle>
                  )}
                </div>
                <p>{product?.date}</p>
              </div>
              <figure>
                <img
                  className="w-full h-72 hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out"
                  src={product?.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product?.pro_name}
                  <div className="badge badge-secondary">
                    {product?.condition}
                  </div>
                </h2>
                <p>
                  {product?.dis.length > 29
                    ? product.dis.slice(0, 28) + "..."
                    : product.dis}
                </p>
                <div>
                  <div className="card-actions justify-between">
                    <div className="badge w-full rounded-none">
                      Orginal Price : {product?.orginal_price}{" "}
                    </div>
                    <div className="badge  w-full rounded-none">
                      Resale Price : {product?.resale_price}{" "}
                    </div>
                    <div className="badge  w-full rounded-none">
                      Year of use : {product?.year_of_use}{" "}
                    </div>
                    <div className="badge  w-full rounded-none">
                      Location : {product?.location}{" "}
                    </div>
                    <label
                      htmlFor="my-modal-3"
                      onClick={() => handleModal(product)}
                      className={
                        "btn btn-primary btn-sm hover:text-black bg-black text-white rounded-none w-full"
                      }
                    >
                      {product?.status ? product.status : "BOOK NOW"}
                    </label>
                    <button
                      onClick={() => handleReportedItems(product._id)}
                      className="link text-rose-600 text-sm"
                    >
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <Toaster />
            </div>
          ))}
      </div>
      {modal && <Modal productInfo={productInfo} setmodal={setmodal}></Modal>}
    </div>
  );
};

export default ShowCategory;
