import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, Outlet } from "react-router-dom";
import { Authcontext } from "../../Contextprovidor/Contextprovidor";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const DashboardRoute = () => {
  const { user } = useContext(Authcontext);
  // console.log(user)
  const { data, isLoading } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: () =>
      fetch(`https://timekeeper-server.vercel.app/users?email=${user?.email}`, {
        headers: {
          authoraization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
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
      );;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col p-10">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-white font-bold text-base-content">
            {data[0]?.userRole === "Buyer" && (
              <li>
                <Link to="/dasboard/myorder">My Orders</Link>
              </li>
            )}
            {data[0]?.userRole === "Seller" && (
              <>
                <li>
                  <Link to="/dasboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dasboard/addproduct">Add Product</Link>
                </li>
              </>
            )}
            {data[0]?.userRole === "Admin" && (
              <>
                <li>
                  <Link to="/dasboard/allseller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dasboard/allbuyers">All Buyer</Link>
                </li>
                <li>
                  <Link to="/dasboard/reporteditems">Reported Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardRoute;
