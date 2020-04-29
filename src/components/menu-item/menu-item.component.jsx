import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => ( // using destructuring technique for props
    <div
      //if size is not undefinded then append it in className
      className={`${size} menu-item`}>
        <div className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}} //style attribute takes an object
         />
        <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;

//we don't want content to be a child of image as it will also start to expand when we hover over background image