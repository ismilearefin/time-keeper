import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Contextprovidor/Contextprovidor";

const Signup = () => {
    const {signin,updateUserProfile,googlesignup} = useContext(Authcontext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userRole = form.userRole.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, userRole,name,password);
        signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('User Created Successfully')
            updateUserProfile(name)
            // ...
            saveUserInfo(name,email,userRole)
            console.log(user)
            
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }

    function handleGoogleSignup( userRole='Buyer'){

        googlesignup()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            saveUserInfo(user.displayName,user.email,userRole)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }


    const saveUserInfo =(name, email, userRole)=>{
        const userInfo = {
            name, 
            email, 
            userRole
        }
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate('/')
        })
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
                    <select name="userRole" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Your role ?</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    </select>
                    <label className="label"><span>Already have an account <Link to='/login' className="link">Login</Link></span></label>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                </form>
                <button onClick={()=>handleGoogleSignup()} className="btn btn-primary">Google</button>
            </div>
            </div>
            <Toaster></Toaster>
        </div>
        </div>
    );
};

export default Signup;
