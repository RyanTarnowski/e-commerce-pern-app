import React, { useState } from "react";

const Checkout = (props) => {
    const { onCheckoutCart} = props;
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [cvv, setcvv] = useState("");

    return (
        <div>
            <h2>Checkout</h2>
            <label>Card Holder: </label>
            <input name="Card Holder" id="name" required onChange={(e) => {setName(e.target.value)}} />
            <label>Card Number: </label>
            <input name="Card Number" id="number" required onChange={(e) => {setNumber(e.target.value)}} />
            <label>Card CVV: </label>
            <input name="Card CVV" id="cvv" required onChange={(e) => {setcvv(e.target.value)}} />
            <button onClick={(e) => {e.preventDefault(); onCheckoutCart({name: name, number: number, cvv: cvv});}}>Checkout</button>
        </div>
    );
}

export default Checkout;