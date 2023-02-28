import React from 'react';
import './item.scss'
import {Link} from "react-router-dom";

const Item = ({item}) => {
    const {title, authors} = item.volumeInfo
    const image = item.volumeInfo.imageLinks?.thumbnail
    const category = item.volumeInfo.categories
    const description = item.volumeInfo.description
    const id = item.id

    return (
        <div className="item_box">
            <Link to={'/item'} state={{title, authors, image, category, description, id}}>
            <div className="item_content">
                <img className="item_image" src={image}/>
                <div className="item_title">{title}</div>
                <div className="item_author">{authors}</div>
                <div className="item_price">$100</div>
            </div>
            </Link>
        </div>
    );
};

export default Item;
