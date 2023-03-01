import React from 'react';
import "./cartItem.scss"
import {useDispatch} from "react-redux";
import {removeFromCartAction} from "../../../redux/slices/cartListSlice";
import {Link} from "react-router-dom";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const {title, authors} = item
    const image = item.image
    const category = item.categories
    const description = item.description
    const id = item.id

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
            </div>
            <div className="changeQuantity">
                <button className="quantityButton">-</button>
                <span className="quantity">4</span>
                <button className="quantityButton">+</button>
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
