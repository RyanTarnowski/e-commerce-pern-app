import React, { useState } from "react";

const ProductDetails = (props) => {
    const { product, isAuthenticated, onAddToCart } = props;
    const [qty, setQty] = useState(1);

    const handleChange = (e) => {
        const newQty = parseInt(e.target.value, 10);
        setQty(isNaN(newQty) ? 1 : newQty);
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {
                isAuthenticated &&
                <div> 
                    <input type="number" min="1" max="100" step="1" value={qty} onChange={handleChange}/>

                    <button onClick={(e) => {
                        e.preventDefault();
                        onAddToCart(product.id, qty);
                    }}>Add to Cart</button>
                </div>
            }
        </div>
    );
}

export default ProductDetails;