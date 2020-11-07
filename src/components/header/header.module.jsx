import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as CrownIcon } from '../../assets/Group.svg';
import './header.styles.scss';

import CartIcon from "../cartIcon/cartIcon.component";

function Header() {
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
                <CartIcon/>
            </div>
        </header>
    )
}

export default Header;
