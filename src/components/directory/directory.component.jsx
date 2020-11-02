import React from 'react';

import './directory.scss';
import {SECTIONS_DATA} from "../../data/section.data";
import MenuItem from "../menuItem/menuItem.component";

function Directory() {
    return (
        <div className="directory-menu">
            {
                SECTIONS_DATA.map(({
                    id,
                    imageUrl,
                    title,
                    size
                                   }) => (
                <MenuItem key={id} title={title} url={imageUrl} size={size}/>
                ))
            }
        </div>
    )
}

export default Directory;
