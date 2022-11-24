import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Contextprovidor/Contextprovidor";

const Signup = () => {
    const {signin,updateUserProfile} = useContext(Authcontext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userPro = form.user.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, userPro,name,password);
        signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateUserProfile(name)
            // ...
            console.log(user)
            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                <form onSubmit={(e) => handleSubmit(e)} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">User Name</span>
                    </label>
                    <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    />
                    <label className="label"></label>
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Sign-up as..</span>
                    </label>
                    <select name="user" className="select select-bordered w-full max-w-xs">
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    </select>
                    <label className="label"><span>Already have an account <Link to='/login' className="link">Login</Link></span></label>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;
