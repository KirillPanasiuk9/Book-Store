import React, {useState} from 'react';
import './item.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction} from "../../../../redux/slices/cartListSlice";

const Item = ({item}) => {
    const dispatch = useDispatch()
    const {title, authors} = item.volumeInfo
    const image = item.volumeInfo.imageLinks?.thumbnail
    const category = item.volumeInfo.categories
    const description = item.volumeInfo.description
    const id = item.id
    const price = 100
    const cover = "Soft"

    const isInCart = useSelector(state =>
        state.cartListSlice.cartItems
            .filter(item => item.id === id)[0] !== undefined
    )

    const addToCart = () => {
        dispatch(addToCartAction({title, authors, image, category, description, id, price, cover}))
    }

    const itemButton = () => {
        if (isInCart) {
            return <button className="item_button inCartItemButton">
                In the Cart
                <svg viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"/>
                </svg>
            </button>
        } else {
            return <button className="item_button addItemButton" onClick={addToCart}>Add to cart</button>
        }
    }

    const itemImage = () => {
        if (image === undefined) {
            return <img className="item_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"/>
        } else {
            return <img className="item_image" src={image}/>
        }
    }


    return (
        <div className="item_box">
            <Link to={'/item'} state={{title, authors, image, category, description, id, price}}>
                {itemImage()}
            </Link>
            <div className="item_title">{title}</div>
            <div className="item_author">{authors}</div>
            <div className="item_price">${price}</div>
            {itemButton()}
        </div>
    );
};

export default Item;
