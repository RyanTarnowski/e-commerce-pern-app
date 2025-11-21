import React, { useState } from "react";

const CartDetails = (props) => {
    const { product, onUpdateCart, onDeleteCart} = props;
    const [qty, setQty] = useState(product.qty);

    const handleChange = (e) => {
        const newQty = parseInt(e.target.value, 10);
        setQty(isNaN(newQty) ? 1 : newQty);
    };

    return (
        <div>
            {/* <div>{product.product_id}</div> */}
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <div>{product.qty}</div>
            <div>{product.price * product.qty}</div>
            <input type="number" min="1" max="100" step="1" value={qty} onChange={handleChange}/>
            <button onClick={(e) => {e.preventDefault(); onUpdateCart(product.product_id, qty);}}>Update Qty</button>
            <button onClick={(e) => {e.preventDefault(); onDeleteCart(product.product_id);}}>Delete</button>
        </div>
    );
};

export default CartDetails;