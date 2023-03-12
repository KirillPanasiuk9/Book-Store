import React from 'react';
import "./checkoutBox.scss"

const CheckoutBox = ({items}) => {
    const totalBooks = items.reduce((p,c) => p + c.count, 0)
    const totalPrice = items.reduce((p,c) => p + c.totalPrice, 0)

    return (
        <div className="checkoutBox">
            <p className="booksCount">You have <span>{totalBooks}</span> books for order</p>
            <p className="totalPrice">Total price is <span>${totalPrice}</span></p>
            <button className="submit">Submit my order</button>
        </div>
    );
};

export default CheckoutBox;
