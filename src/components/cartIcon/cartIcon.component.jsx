import React from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';
import { useSelector } from "react-redux";

import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';

export default function CartIcon({ handleClick }) {

    const cartItemsLength = useSelector(selectCartItemsQuantity);

    return (
        <div tabIndex="0"
             className="cart-icon"
             onClick={handleClick}>
            <ShopIcon className="shopping_icon"/>
            <span className="item-count">{cartItemsLength}</span>
        </div>
    )
}