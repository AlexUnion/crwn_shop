import React from 'react';
import s from './checkoutItem.module.scss';

import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../../redux/cart/actionTypes";

function CheckoutItem({ id, name, imageUrl, price, quantity }) {

    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <div className={s.img_container}>
                <img src={imageUrl} alt=""/>
            </div>
            <span className={s.text}>{name}</span>
            <span className={s.arrow_container}>
                <div role="button"
                     onClick={() => dispatch(decrementItem(id))}
                     className={s.btn}>
                    ❮
                </div>
                <span className={s.quantity}>{quantity}</span>
                <div role="button"
                     onClick={() => dispatch(incrementItem(id))}
                     className={s.btn}>
                    ❯
                </div>
            </span>
            <span className={s.text}>{price}$</span>
            <div role="button"
                 onClick={() => dispatch(removeItem(id))}
                 className={s.delete}>✕</div>
        </div>
    )
}

export default CheckoutItem;
