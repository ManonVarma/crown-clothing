import React from 'react';

import MyOrdersItem from '../my-orders-item/my-orders-item.component';

const OrderList = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span style={{marginLeft: '-55px'}}>Price</span>
                </div>
            </div>
            {
                cartItems.length === 0 ?
                    <h2>No items in yout cart</h2>
                    :
                    cartItems.map(cartItem => 
                        <MyOrdersItem key={cartItem.id} cartItem={cartItem}></MyOrdersItem>
                    )
            }
            <div className='total'>
                <span>TOTAL: ₹{total}</span>
            </div>
        </div>
    )
}

export default OrderList;
