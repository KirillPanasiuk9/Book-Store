import React from 'react';
import './item.scss'

const Item = ({item}) => {
    // console.log(item.volumeInfo);
    return (
        <div className="item_box">
            <div className="item_content">
                <img className="item_image" src={item.volumeInfo.imageLinks?.thumbnail}/>
                <div className="item_title">{item.volumeInfo.title}</div>
                <div className="item_author">{item.volumeInfo.authors[0]}</div>
                <div className="item_price">$100</div>
                <div className="item_button">Buy</div>
            </div>
        </div>
    );
};

export default Item;
