import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { fetchUserOrders } from '../../firebase/firebase.utils';

import OrderList from '../../components/my-orders-list/my-orders-list.component';

import CircleLoader from "react-spinners/ClipLoader";

import './my-orders.style.css';

const MyOrdersPage = ({ currentUser }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async()=>{
        setLoading(true);
        const data = await fetchUserOrders(currentUser);
        setTimeout(() => {
            setLoading(false);
        }
        , 4000);
        setOrders(data.map(l => ({
            data: l.data(),
            id: l.id
        })));
    },[]);
    

    console.log(orders);

    return (
        <div className='my-orders'>
            {
                loading ?
                <div className="loading">
                    <CircleLoader size={'80'} />
                </div>
                :
                orders.length > 0 ? 
                <>
                    <h1>YOUR ORDERS</h1>
                    {
                        orders.map(order => {
                            return (
                                <div style={{marginTop: '80px', marginBottom: '20px'}}>
                                    <h1>ORDER ID : &nbsp; #{order.id}</h1>
                                    <h1>ORDERED ON: &nbsp; {order.data.orderedOn}</h1>
                                    <OrderList
                                        cartItems={order.data.cartItems} 
                                        total={parseFloat(order.data.total)}>
                                    </OrderList>
                                </div>
                            )
                        }) 
                    }
                </>
                : 
                <h1>NO ORDERS</h1>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(MyOrdersPage);