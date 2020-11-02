import React from 'react';
import { ReactComponent as CrownIcon } from '../../assets/Group.svg';
import './header.styles.scss';

import CartIcon from "../cartIcon/cartIcon.component";

function Header() {
    return (
        <header className="header">
            <a href="#" className="logo-container">
                <CrownIcon/>
            </a>
            <div className="options">
                <nav>
                    <a href="#" className="option">shop</a>
                    <a href="#" className="option">contact</a>
                    <a href="#" className="option">sing in</a>
                </nav>
                <CartIcon/>
            </div>
        </header>
    )
}

export default Header;
