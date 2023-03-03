import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./cartPage.scss"
import CartItem from "./Components/CartItem";
import {useSelector} from "react-redux";

const CartPage = () => {
    const items = useSelector(state => state.cartListSlice.cartItems)
    const booksCount = items.reduce((p,c) => p + c.count, 0)

    return (
        <div className="cartPage">
            <NavBar/>
            <div className="content">
                <div className="cartList">
                    {items.map(item =>
                        <CartItem item={item}/>
                    )}
                </div>
                <div className="checkoutBox">
                    <p className="booksCount">You have <span>{booksCount}</span> books for order</p>
                    <p className="totalPrice">Total price is <span>$1000</span></p>
                    <button className="submit">Submit my order</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
