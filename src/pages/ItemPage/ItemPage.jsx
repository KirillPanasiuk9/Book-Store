import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./itemPage.scss"
import {useLocation} from "react-router";


const ItemPage = () => {
    const location = useLocation()
    const {title, authors, image, category, description} = location.state

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
                        <div className="coverType">Soft Cover</div>
                        <div className="coverType">Solid Cover</div>
                    </div>
                    <button className="button">Add to cart</button>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;
