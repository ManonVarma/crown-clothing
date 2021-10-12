import React from 'react';

import './cart-item.style.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} &nbsp; x &nbsp; ₹{(price * 10.26).toFixed(2)}
                </span>
            </div>
        </div>
    )
}

export default CartItem;