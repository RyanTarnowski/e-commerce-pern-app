import React, { useState } from "react";

const OrderDetails = (props) => {
    const { order, onShowDetails} = props;
    const [showDetails, setShowDetails] = useState(false);
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

    return (
        <div>        
            <button className="button-base button-blue" onClick={(e) => {e.preventDefault(); setShowDetails(!showDetails); onShowDetails(order.id, !showDetails);}}>{showDetails ? "Hide Details" : "Show Details"}</button>

            {order.details && showDetails &&  
                <table>
                    <thead>
                        <tr>
                            <th>Order Line #</th>
                            <th>Product</th>
                            <th>Desc</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.details.map((detail, index) =>
                                <tr>            
                                    <td>{index + 1}</td>
                                    <td>{detail.name}</td>
                                    <td>{detail.description}</td>
                                    <td>{detail.qty}</td>
                                    <td>{formatter.format(detail.total)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default OrderDetails;