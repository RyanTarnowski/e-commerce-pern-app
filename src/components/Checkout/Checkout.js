import { useState } from "react";
import { useSelector } from 'react-redux';
import "./Checkout.css";

const Checkout = (props) => {
    const { onCheckoutCart} = props;
    const { error } = useSelector(state => state.user);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [cvv, setcvv] = useState("");
    const handleCheckout = async (e) => {
        try {
            e.preventDefault();
            await onCheckoutCart({name: name, number: number, cvv: cvv});
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="col-30">
            <h2>Checkout</h2>

            <form className="checkoutform" onSubmit={handleCheckout}>
                <div className="row">
                    <div className="col-50">
                        <label>First Name: </label>
                        <input type="text" name="First Name" id="fname" required />
                        <label>Last Name: </label>
                        <input type="text" name="Last Name" id="lname" required />
                        <label>Email: </label>
                        <input type="text" name="Email" id="lname" required />
                        <label>Address: </label>
                        <input type="text" name="Address" id="lname" required />
                        <label>Country: </label>
                        <input type="text" name="Country" id="lname" required />
                        <label>City: </label>
                        <input type="text" name="City" id="lname" required />
                        <label>Provice/State: </label>
                        <input type="text" name="ProviceState" id="lname" required />
                        <label>Postal Code: </label>
                        <input type="text" name="Postal Code" id="lname" required />
                    </div>
                    <div className="col-50">
                        <label>Card Holder: </label>
                        <input type="text" name="Card Holder" id="name" required onChange={(e) => {setName(e.target.value)}} />
                        <label>Card Number: </label>
                        <input type="text" name="Card Number" id="number" required onChange={(e) => {setNumber(e.target.value)}} />
                        <label>Card CVV: </label>
                        <input type="text" name="Card CVV" id="cvv" required onChange={(e) => {setcvv(e.target.value)}} />
                    </div>
                </div>

                <button id="loginbtn" type="submit" className='button-base button-green'>Checkout</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    );
}

export default Checkout;