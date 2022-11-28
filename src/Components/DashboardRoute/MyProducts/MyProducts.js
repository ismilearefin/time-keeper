import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../../Contextprovidor/Contextprovidor";
import { RotatingLines } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(Authcontext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myproducts", user.email],
    queryFn: () =>
      fetch(
        `https://timekeeper-server.vercel.app/allproducts/myproducts?email=${user.email}`,
        {
          headers: {
            authoraization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

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
  console.log(data);

  function handleDelete(_id) {
    fetch(`https://timekeeper-server.vercel.app/allproducts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  }

  function handleAdvertise(id) {
    fetch(`https://timekeeper-server.vercel.app/allproducts/advertise/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Advertised Mood on");
          refetch();
        }
      });
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Status</th>
              <th>Image</th>
              <th>Name & Price</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product._id}>
                <th>
                  {product?.status ? (
                    <p className="text-rose-600">Sold</p>
                  ) : (
                    <p className="text-green-600">Available</p>
                  )}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        <img
                          src={product.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.pro_name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    ${product.resale_price}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-rose-800 btn-xs text-white rounded-none"
                  >
                    X
                  </button>
                </td>
                <th>
                  {!product?.advertise && (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-xs text-sky-400 rounded-none"
                    >
                      Advertise
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default MyProducts;
