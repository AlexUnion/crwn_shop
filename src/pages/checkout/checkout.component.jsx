import React from 'react';
import s from './checkout.module.scss';

import { useSelector } from "react-redux";
import { selectCartItems, selectTotalSum } from "../../redux/cart/cart.selectors";
import CheckoutBar from "../../components/checkoutBar/checkoutBar.component";
import CheckoutItem from "../../components/ckeckoutItem/checkoutItem.component";

function Checkout() {

    const cartItems = useSelector(selectCartItems);
    const totalSum = useSelector(selectTotalSum);

    return (
        <div className={s.container}>
            <CheckoutBar/>
            {cartItems.length ?
                cartItems.map(({ id, name, imageUrl, price, quantity }) => (
                    <CheckoutItem key={id} id={id} name={name} imageUrl={imageUrl}
                                  price={price} quantity={quantity}/>
                ))
                :
                <span className={s.empty_cart}>Empty cart</span>
            }
            <div className={s.total}>
                Total: ${totalSum}
            </div>
        </div>
    )
}

export default Checkout;
