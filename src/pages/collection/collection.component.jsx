import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SHOP_DATA from "../../data/shop.data";
import CollectionItem from "../../components/collectionItem/collectionItem.component";

import { addItemToCart } from '../../redux/cart/actionTypes';

import './collection.scss';

function Collection({ defaultCollection, requiredLength }) {

    let collection = defaultCollection;

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    if (!collection) {
        collection = params['collection'];

    }
    const currentCollection = SHOP_DATA.find(
        ({ routeName }) => routeName === collection);

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
                {itemsCopy.map((item) => (
                    <CollectionItem
                        key={item.id}
                        title={item.name}
                        imgUrl={item.imageUrl}
                        price={item.price}
                        handleClick={() => dispatch(addItemToCart(item))}/>
                    ))}
            </div>
        </div>
    );
}

export default Collection;
