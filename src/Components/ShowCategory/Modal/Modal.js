import React, { useContext } from "react";
import { Authcontext } from "../../../Contextprovidor/Contextprovidor";
import toast from "react-hot-toast";

const Modal = ({ productInfo, setmodal }) => {
  const { user } = useContext(Authcontext);
  const { pro_name, resale_price, _id } = productInfo;
  function handleProductModal(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const number = form.number.value;
    const location = form.location.value;

    console.log(productInfo);
    const BookedProduct = {
      buyer_email: email,
      number,
      location,
    };
    console.log(_id);

    fetch(`https://timekeeper-server.vercel.app/allproducts/booked/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(BookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your Product is Booked");
        } else {
          toast.error("Already Booked");
        }
        setmodal(false);
      });
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-center  font-bold">
            YOUR PRODUCT ID : {_id}
          </h3>
          <form onSubmit={(e) => handleProductModal(e)}>
            <label>
              <span className="text-black">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              disabled
              className="input input-bordered w-full"
            />
            <label>
              <span className="text-black">Your email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user.email}
              disabled
              className="input input-bordered w-full "
            />
            <label>
              <span className="text-black">Product name</span>
            </label>
            <input
              type="text"
              name="itemName"
              defaultValue={pro_name}
              disabled
              className="input input-bordered w-full "
            />
            <label>
              <span className="text-black">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={resale_price}
              disabled
              className="input input-bordered w-full "
            />
            <label>
              <span className="text-black">Your phone number</span>
            </label>
            <input
              type="text"
              name="number"
              placeholder="Phone number"
              className="input input-bordered w-full "
            />
            <label>
              <span className="text-black">Meeting Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full  mb-2"
            />
            <input
              type="submit"
              value="BOOK NOW"
              className="input input-bordered w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
