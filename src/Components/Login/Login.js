import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Contextprovidor/Contextprovidor";

const Login = () => {
    const {login,googlesignup} = useContext(Authcontext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userRole = form.userRole.value;
        const password = form.password.value;
        console.log(email, password, userRole);
        
            // Login with email and password
            login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success(`Welcome back ${user.displayName}`)
                navigate(from, {replace : true});
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                console.log(errorMessage)
            });
    }

    function handleGooglesignUp(){
        googlesignup()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            navigate(from, {replace : true});
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-80 lg:w-96 shadow-2xl bg-base-100">
                <form onSubmit={(e) => handleSubmit(e)} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    type="text"
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
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    />
                    <label className="label"></label>
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Login as..</span>
                    </label>
                    <select name="userRole" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Your role ?</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    </select>
                </div>
                <label className="label"><span>Create account <Link to='/signup' className="link">Sign-Up</Link></span></label>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                </form>
                    <button onClick={handleGooglesignUp} className="btn btn-primary">Google</button>
            </div>
            </div>
            <Toaster/>
        </div>
        </div>
    );
};

export default Login;
