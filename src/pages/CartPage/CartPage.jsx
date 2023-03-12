import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./cartPage.scss"
import CartItem from "./components/CartItem/CartItem";
import {useSelector} from "react-redux";
import CheckoutBox from "./components/CheckoutBox/CheckoutBox";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import Footer from "../../components/Footer/Footer";


const CartPage = () => {
    const items = useSelector(state => state.cartListSlice.cartItems)

    return (
        <>
            <div className="cartPage">
                <NavBar/>
                <div className="content">
                    {items.length === 0
                        ?
                        <EmptyCart />
                        :
                        <>
                            <div className="cartList">
                                {items.map(item => <CartItem key={item.id+1} item={item}/>)}
                            </div>
                            <CheckoutBox items={items}/>
                        </>
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default CartPage;
