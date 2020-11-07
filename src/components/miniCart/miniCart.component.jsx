import React from 'react';
import s from './miniCart.module.scss';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import MiniCartItem from "../miniCartItem/miniCartItem.component";

function Cart() {

    const cartItems = useSelector(selectCartItems);

    return (
        <div className={s.cart_container}>
            <div className={s.cart_collection}>
                {cartItems.length ?
                    cartItems.map(({ id, name, imageUrl, quantity, price }) => (
                        <MiniCartItem key={id} name={name} imageUrl={imageUrl}
                                      quantity={quantity} price={price}/>
                    ))
                    :
                    <span className={s.span}>Your cart is empty</span>
                }
            </div>
            <Link to="/checkout" className={s.btn}>GO TO CHECKOUT</Link>
        </div>
    )
}

export default Cart;
