import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./itemPage.scss"
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction} from "../../redux/slices/cartListSlice";


const ItemPage = () => {
    const [cover, setCover] = useState("soft")
    const location = useLocation()
    const dispatch = useDispatch()
    const {title, authors, image, category, description, id} = location.state
    const isInCart = useSelector(state =>
        state.cartListSlice.cartItems
            .filter(item => item.id === id)[0] !== undefined
    )

    // const softCover = document.getElementById("soft")
    // const solidCover = document.getElementById("solid")

    const addToCart = () => {
        dispatch(addToCartAction(location.state))
    }

    const handleSoftCover = () => {
        const softCover = document.getElementById("soft")
        const solidCover = document.getElementById("solid")
        softCover.style.backgroundColor = "#93443F"
        solidCover.style.backgroundColor = "transparent"
        setCover("Soft")
    }

    const handleSolidCover = () => {
        const softCover = document.getElementById("soft")
        const solidCover = document.getElementById("solid")
        softCover.style.backgroundColor = "transparent"
        solidCover.style.backgroundColor = "#93443F"
        setCover("Solid")
    }
    // useMemo try
    const buttonStyle = () => {
        if (isInCart) {
            return <button className="button inCartButton">
                In the Cart
                <svg viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"/>
                </svg>
            </button>
        } else {
            return <button
                className="button addButton"
                onClick={addToCart}
            >
                Add to cart
                <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                    </path>
                </svg>
            </button>
        }
    }


    return (
        <div className="itemPage">
            <NavBar/>
            <div className="container">
                <div className="image">
                    <img src={image}/>
                </div>
                <div className="information">
                    <p className="title">{title}</p>
                    <p className="author">{authors}</p>
                    <p className="category">{category}</p>
                    <p className="price">$100</p>
                    <div className="coverSelector">
                        <div id="soft" className="coverType" onClick={handleSoftCover}>Soft Cover</div>
                        <div id="solid" className="coverType" onClick={handleSolidCover}>Solid Cover</div>
                    </div>
                    {buttonStyle()}
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;
