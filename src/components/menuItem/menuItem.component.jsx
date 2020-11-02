import React from 'react';
import { useHistory } from 'react-router-dom';

import './menuItem.scss';

function MenuItem(props) {
    const { url, title, size, linkUrl } = props;

    const history = useHistory();

    return (
        <div className={`menu-item ${size || ''}`}
             onClick={() => history.push(`/shop/${linkUrl}`)}
             role="button" tabIndex="0">
            <div
                style={{
                    backgroundImage: `url(${url})`,
                }}
                className="background-image"/>
            <div className="content">
                <span className="title">{title.toUpperCase()}</span>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;