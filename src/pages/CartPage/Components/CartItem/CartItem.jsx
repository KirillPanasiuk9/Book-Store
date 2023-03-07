import React from 'react';
import "./cartItem.scss"
import {useDispatch, useSelector} from "react-redux";
import {decrementQuantityAction, incrementQuantityAction, removeFromCartAction} from "../../../../redux/slices/cartListSlice";
import {Link} from "react-router-dom";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const {title, authors, image, category, description, id, totalPrice, count, cover, price} = item

    const increment = () => {
        dispatch(incrementQuantityAction(item))
    }

    const decrement = () => {
        if(count === 1) {
          console.log("disable")
        } else {dispatch(decrementQuantityAction(item))}
    }

    const removeItem = () => {
        dispatch(removeFromCartAction(item))
    }

    return (
        <div className="cartItem">
            <Link to={'/item'} state={{title, authors, image, category, description, id, price}}>
                <img className="cart_image" src={image}/>
            </Link>
            <div className="cart_info">
                <div className="cart_title">{title}</div>
                <div className="cart_author">{authors}</div>
                <div className="cart_cover">{cover} Cover</div>
            </div>
            <div className="changeQuantity">
                <button id="decrement" className="quantityButton" onClick={decrement}>−</button>
                <span className="quantity">{count}</span>
                <button className="quantityButton" onClick={increment}>+</button>
            </div>
            <div className="priceBox">
                <p className="totalBookPrice">${totalPrice}</p>
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
