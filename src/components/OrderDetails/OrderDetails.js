import React, { useState } from "react";

const OrderDetails = (props) => {
    const { order, onShowDetails} = props;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>        
            <button onClick={(e) => {e.preventDefault(); setShowDetails(!showDetails); onShowDetails(order.id, !showDetails);}}>Show Details</button>

            {showDetails && <h3>OrderDetails</h3>}

            {order.details && showDetails &&  
            order.details.map((detail, index) =>
                <div>            
                    <div>{detail.name}</div>
                    <div>{detail.description}</div>
                    <div>{detail.qty}</div>
                    <div>{detail.total}</div>
                </div>
            )}
        </div>
    );
}

export default OrderDetails;