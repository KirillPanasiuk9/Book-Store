import React, {useState} from 'react';
import "./cartItem.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    decrementQuantityAction,
    incrementQuantityAction,
    removeFromCartAction
} from "../../../redux/slices/cartListSlice";
import {Link} from "react-router-dom";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const {title, authors} = item
    const image = item.image
    const category = item.categories
    const description = item.description
    const id = item.id
    const currentBook = useSelector(state => state.cartListSlice.cartItems.filter(book => book.id === id))

    const countBook = () => {
        // console.log(currentBook[0].count);
        return currentBook[0].count
    }

    const increment = () => {
        dispatch(incrementQuantityAction(item))
    }

    const decrement = () => {
        dispatch(decrementQuantityAction(item))
    }

    // console.log(currentBook);

    const removeItem = () => {
        dispatch(removeFromCartAction(item))
    }

    return (
        <div className="cartItem">
            <Link to={'/item'} state={{title, authors, image, category, description, id}}>
                <img className="cart_image" src={image}/>
            </Link>
            <div className="cart_info">
                <div className="cart_title">{title}</div>
                <div className="cart_author">{authors}</div>
                <div className="cart_cover">Solid Cover</div>
            </div>
            <div className="changeQuantity">
                <button className="quantityButton" onClick={decrement}>−</button>
                <span className="quantity">{countBook()}</span>
                <button className="quantityButton" onClick={increment}>+</button>
            </div>
            <div className="priceBox">
                <p className="totalBookPrice">$300</p>
                <button
                    className="deleteItem"
                    onClick={removeItem}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;
