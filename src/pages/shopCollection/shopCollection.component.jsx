import React from 'react';
import SHOP_DATA from "../../data/shop.data";
import Collection from "../collection/collection.component";

const REQUIRED_LENGTH = 4;

function ShopCollection() {
    return (
        <>
            {
                SHOP_DATA.map(({ routeName, id }) => (
                    <Collection key={id}
                                defaultCollection={routeName}
                                requiredLength={REQUIRED_LENGTH}/>
                ))
            }
        </>

    );
}

export default ShopCollection;
