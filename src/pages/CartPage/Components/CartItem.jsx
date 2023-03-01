import React from 'react';
import "./cartItem.scss"

const CartItem = () => {
    return (
        <div className="cartItem">
            <img className="cart_image"/>
            <div className="cart_info">
                <div className="cart_title">title</div>
                <div className="cart_author">authors</div>
            </div>
            <div className="changeQuantity">
                <button className="quantityButton">-</button>
                <span className="quantity">4</span>
                <button className="quantityButton">+</button>
            </div>
            <div className="priceBox">
                <p className="totalBookPrice">$300</p>
                <button className="deleteItem">Delete</button>
            </div>
        </div>
    );
};

export default CartItem;
