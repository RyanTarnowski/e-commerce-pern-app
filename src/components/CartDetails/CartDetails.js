import React, { useState } from "react";
import "./CartDetails.css"

const CartDetails = (props) => {
    const { product, onUpdateCart, onDeleteCart} = props;
    const [qty, setQty] = useState(product.qty);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options can be used to round to whole numbers.
        trailingZeroDisplay: 'stripIfInteger'   // This is probably what most people
                                                // want. It will only stop printing
                                                // the fraction when the input
                                                // amount is a round number (int)
                                                // already. If that's not what you
                                                // need, have a look at the options
                                                // below.
        //minimumFractionDigits: 0, // This suffices for whole numbers, but will
                                    // print 2500.10 as $2,500.1
        //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
    });

    const handleChange = (e) => {
        const newQty = parseInt(e.target.value, 10);
        setQty(isNaN(newQty) ? 1 : newQty);
    };

    return (
        <div className="cartdetail">
            <div className="col-50">
                <label className="bold">{product.name}</label>
                <label>{product.description}</label>
            </div>

            <div className="col-20">
                <label>Qty: <span className='bold'>{product.qty}</span></label>
                <label>Cost: <span className='bold'>{formatter.format(product.price * product.qty)}</span></label>            
            </div>

            <div className="modifycart">
                <input type="number" min="1" max="100" step="1" value={qty} onChange={handleChange}/>
                <button className='button-base button-blue buttonsqr' onClick={(e) => {e.preventDefault(); onUpdateCart(product.product_id, qty);}}>Update Qty</button>
                <button className='button-base button-red' onClick={(e) => {e.preventDefault(); onDeleteCart(product.product_id);}}>Delete</button>
            </div>
        </div>
    );
};

export default CartDetails;