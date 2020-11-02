import React from 'react';

import './menuItem.scss';

function MenuItem(props) {
    const { url, title, size } = props;
    return (
        <div className={`menu-item ${size || ''}`}>
            <div
                style={{
                    backgroundImage: `url(${url})`,
                }}
                className="background-image"/>
            <div className="content">
                <span className="title">{title.toUpperCase()}</span>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}

export default MenuItem;