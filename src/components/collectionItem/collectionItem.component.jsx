import React from 'react';

import './collectionItem.scss';

function CollectionItem({ title, imgUrl, price}) {
    return (
        <div className="collection-item">
            <img src={imgUrl} alt="" className="image"/>
            <div className="collection-footer">
                <span className="name">{ title }</span>
                <span className="price">{ price }</span>
            </div>
        </div>
    )
}

export default CollectionItem;
