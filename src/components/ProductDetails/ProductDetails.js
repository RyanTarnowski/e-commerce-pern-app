import React, { useState } from "react";
import "./ProductDetails.css"

const ProductDetails = (props) => {
    const { product, isAuthenticated, onAddToCart } = props;
    const [qty, setQty] = useState(1);
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
        <div className="product">
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{formatter.format(product.price)}</p>
            </div>

            <img /> 
            
            {
                isAuthenticated &&
                <div className="addtocart"> 
                    <input type="number" min="1" max="100" step="1" value={qty} onChange={handleChange}/>               
                    <button className='button-base button-green' onClick={(e) => {e.preventDefault(); onAddToCart(product.id, qty);}}>Add to Cart</button>
                </div>
            }
        </div>
    );
}

export default ProductDetails;