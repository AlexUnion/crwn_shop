import React from 'react';
import s from "./checkoutBar.module.scss";

function CheckoutBar() {
    return (
        <div className={s.nav_bar}>
            <div className={s.nav_item}>
                <span>Product</span>
            </div>
            <div className={s.nav_item}>
                <span>Description</span>
            </div>
            <div className={s.nav_item}>
                <span>Quantity</span>
            </div>
            <div className={s.nav_item}>
                <span>Price</span>
            </div>
            <div className={s.nav_item}>
                <span>Remove</span>
            </div>
        </div>
    )
}

export default CheckoutBar;
