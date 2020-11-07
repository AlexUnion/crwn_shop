import React from 'react';
import s from './miniCartItem.module.scss';

function MiniCartItem({ id, imageUrl, quantity, price, name }) {
    return (
        <div key={id} className={s.item_container}>
            <img src={imageUrl} alt="" className={s.img}/>
            <div className={s.info_container}>
                <span>{name}</span>
                <span>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default MiniCartItem;