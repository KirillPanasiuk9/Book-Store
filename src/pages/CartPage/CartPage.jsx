import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./cartPage.scss"
import CartItem from "./Components/CartItem";

const CartPage = () => {

    return (
        <div className="cartPage">
            <NavBar/>
            <div className="content">
                <div className="cartList">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="checkoutBox">
                    <p className="booksCount">You have 3 books for order</p>
                    <p className="totalPrice">Total price is $1000</p>
                    <button className="submit">Submit my order</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
