import React, { useContext } from 'react';
import { Authcontext } from '../../../Contextprovidor/Contextprovidor';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';



const Addproducts = () => {
    const {user} = useContext(Authcontext)
    // need user email and send with product details..
    function handleAddProduct(e){
        e.preventDefault();
        const form = e.target;
        const pro_name = form.pro_name.value;
        const location = form.location.value;
        const orginal_price = form.orginal_price.value;
        const resale_price = form.resale_price.value;
        const year_of_use = form.year_of_use.value;
        const seller_name = form.seller_name.value;
        const condition = form.condition.value;
        const number = form.number.value;
        const year_of_purchase = form.year_of_purchase.value;
        const category = form.category.value;
        const dis = form.dis.value;
        const img = form.img.value;

        const addProduct = {
            email : user.email,
            pro_name,
            location,
            orginal_price,
            resale_price,
            year_of_use,
            seller_name,
            condition,
            number,
            year_of_purchase,
            category,
            dis,
            img
        }
        console.log(addProduct)
        fetch('http://localhost:5000/allproducts',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset()
                toast.success('Your Product is Booked')
            }
        })

    }




    return (
        <div>
            <h1 className='text-center text-white uppercase text-2xl font-light'>Add Product</h1>
            <form onSubmit={(e)=>handleAddProduct(e)}>
                <label><span>Product name</span></label>
            <input type="text" name='pro_name' className="input input-bordered w-full mb-2" />
                <label><span>Your Location</span></label>
            <input type="text" name='location' className="input input-bordered w-full mb-2" />
                <label><span>Orginal-Price</span></label>
            <input type="number" name='orginal_price' className="input input-bordered w-full mb-2" />
                <label><span>Resale-Price</span></label>
            <input type="number" name='resale_price' className="input input-bordered w-full mb-2" />
                <label><span>Years of use</span></label>
            <input type="number" name='year_of_use' className="input input-bordered w-full mb-2" />
                <label><span>Seller Name</span></label>
            <input type="text" name='seller_name' value={user.displayName} className="input input-bordered w-full mb-2" />
                <label><span>Condition</span></label>
                <select name='condition' className="select select-bordered w-full mb-2">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                </select>
                <label><span>Phone Number</span></label>
            <input type="number" name='number' className="input input-bordered w-full mb-2" />    
                <label><span>Year of purchase</span></label>
            <input type="number" name='year_of_purchase' className="input input-bordered w-full mb-2" />    
                <label><span>Category</span></label>
                <select name='category' className="select select-bordered w-full mb-2">
                    <option value="Mens">Mens</option>
                    <option value="Ladies">Ladies</option>
                    <option value="Kids">Kids</option>
                    <option value="Premium">Premium</option>
                </select>
            <textarea name='dis' className="textarea textarea-bordered w-full h-40" placeholder="Discription"></textarea>
            <label><span>Product Photo</span></label>
                <br />
            <input type="text" name='img' placeholder='url' className="input input-bordered w-full mb-2" />
            <input type="submit" value="SUBMIT NOW" className="btn w-full " />
            </form>
            <Toaster/>
        </div>
    );
};

export default Addproducts;