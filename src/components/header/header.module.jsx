import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as CrownIcon } from '../../assets/Group.svg';
import './header.styles.scss';

import CartIcon from "../cartIcon/cartIcon.component";
import Cart from "../miniCart/miniCart.component";

function Header() {

    const [isVisible, setVisibility] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <CrownIcon/>
            </Link>
            <div className="options">
                <nav>
                    <Link to="/shop" className="option">shop</Link>
                    <a href="#" className="option">contact</a>
                    <a href="#" className="option">sing in</a>
                </nav>
                <CartIcon
                    handleClick={() => setVisibility((prev) => !prev)}/>
                {isVisible ? <Cart/> : null}
            </div>
        </header>
    )
}

export default Header;
