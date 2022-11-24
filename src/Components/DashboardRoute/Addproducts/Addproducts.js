import React from 'react';

const Addproducts = () => {
    // need user email and send with product details..
    return (
        <div>
            <h1 className='text-center text-white uppercase text-2xl font-light'>Add Product</h1>
            <form>
                <label><span>Product name</span></label>
            <input type="text" name='pro_name' className="input input-bordered w-full mb-2" />
                <label><span>Your Location</span></label>
            <input type="text" name='location' className="input input-bordered w-full mb-2" />
                <label><span>Orginal-Price</span></label>
            <input type="number" name='orinal_price' className="input input-bordered w-full mb-2" />
                <label><span>Resale-Price</span></label>
            <input type="number" name='resale_price' className="input input-bordered w-full mb-2" />
                <label><span>Years of use</span></label>
            <input type="number" name='year_of_use' className="input input-bordered w-full mb-2" />
                <label><span>Seller Name</span></label>
            <input type="text" name='seller_name' className="input input-bordered w-full mb-2" />
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
            <textarea className="textarea textarea-bordered w-full h-40" placeholder="Discription"></textarea>
            <label><span>Product Photo</span></label>
                <br />
            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Addproducts;