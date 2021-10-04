import React from 'react';
import './menu-item.style.scss'

import { withRouter } from 'react-router';

const MenuIem = ({title, imageUrl, size, linkUrl, match, history }) => (
    <div 
        className={size? 'large menu-item':'menu-item'} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}  // /somematchedURL/linkURL
    >
        <div 
            className='background-image' 
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuIem);  // withRouter() for getting access to the 'history, match, location' of the grandparent (HomePage)
