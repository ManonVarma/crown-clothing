import React from 'react';

import './my-orders-item.style.css';

const MyOrdersItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='order-checkout-item'>
            <img className='order-image-container' src={imageUrl} alt='item' />
            <span className='order-name'>{name}</span>
            <span className='order-quantity'>
                <span className='order-value'>{quantity}</span>
            </span>
            <span className='order-price'>{(price * 10.26).toFixed(2)}</span>
        </div>
    )
}

export default MyOrdersItem;