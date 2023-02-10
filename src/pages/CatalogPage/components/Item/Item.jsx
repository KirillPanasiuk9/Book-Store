import React from 'react';
import './item.scss'

const Item = () => {
    return (
        <div className="item_box">
            <div className="item_content">
                <div className="item_image"></div>
                <div className="item_title">A Lotus for Miss Quon</div>
                <div className="item_author">J. H. Chase</div>
                <div className="item_price">$100</div>
                <div className="item_button">Buy</div>
            </div>
        </div>
    );
};

export default Item;
