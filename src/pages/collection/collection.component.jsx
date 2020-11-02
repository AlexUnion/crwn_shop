import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SHOP_DATA from "../../data/shop.data";
import CollectionItem from "../../components/collectionItem/collectionItem.component";

import './collection.scss';

function Collection({ defaultCollection, requiredLength }) {

    let collection = defaultCollection;
    const params = useParams();

    if (!collection) {
        collection = params['collection'];
    }

    const currentCollection = SHOP_DATA.find(({ routeName }) => routeName === collection);

    const history = useHistory();

    if (!currentCollection) {
        history.push('/');
    }

    const { title, items } = currentCollection;
    const itemsCopy = [...items];

    if (itemsCopy.length > requiredLength) {
        itemsCopy.length = requiredLength;
    }

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {itemsCopy.map(({ id, name, imageUrl, price }) => (
                    <CollectionItem
                        key={id}
                        title={name}
                        imgUrl={imageUrl}
                        price={price}/>
                    ))}
            </div>
        </div>
    );
}

export default Collection;
