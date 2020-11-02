import React from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import './cartIcom.scss';

export default function CartIcon() {
    return (
        <div className="cart-icon">
            <ShopIcon className="shopping_icon"/>
        </div>
    )
}