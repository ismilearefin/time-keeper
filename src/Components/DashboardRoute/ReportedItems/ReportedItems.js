import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

const ReportedItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["report"],
    queryFn: () =>
      fetch("https://timekeeper-server.vercel.app/allproducts/report").then(
        (res) => res.json()
      ),
  });

  
  if (isLoading) {
    return (<div className='flex justify-center items-center min-h-screen'><RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
    /></div>)
  }

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

  return (
    <div>
      <h1 className="text-center text-white text-4xl mb-4 font-light">
        Reported Items
      </h1>
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
                      <p className="text-rose-600">Booked</p>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
