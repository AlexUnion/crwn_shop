import React from 'react';

import './collectionItem.scss';

function CollectionItem({ title, imgUrl, price, handleClick }) {
    return (
        <div className="collection-item">
            <img src={imgUrl} alt="" className="image"/>
            <button className="custom-button"
                    onClick={handleClick}>
                Add item to cart
            </button>
            <div className="collection-footer">
                <span className="name">{ title }</span>
                <span className="price">{ price }</span>
            </div>
        </div>
    )
}

export default CollectionItem;
