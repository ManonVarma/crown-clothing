import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { pushUserOrders } from '../../firebase/firebase.utils';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { emptyTheCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const StripeCheckoutButton = ({ price, cartItems, total, currentUser, emptyTheCart }) => {
    const history = useHistory();
    const priceForStripe = (price * 100 * 10.26).toFixed(2);  // stripe processes in cents and not dollars
    const publishableKey = 'pk_test_51JgVdMSBtDQlPRD3dHRsK8PnpkAaRBperYD4742N6TvNLA9Q5bointYNZalKiJ6rQJoFqCa43Tz0Zh6Gy3PtAi7m00iltFkvkE';

    const onToken = (token) => {
        console.log(token);
        alert(`Payment Successful \nThanks for your order, ${token.card.name}`);
        history.replace('/');   


        const orderedOn = new Date();
        pushUserOrders(currentUser, cartItems, total, orderedOn, token.card.id);  // push the current order into firestore
        emptyTheCart();
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Pvt. Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${(price * 10.26).toFixed(2)}`}  // this price is what the user sees
            currency='INR'
            amount={priceForStripe}  // this is the price Stripe sees (cents)
            panelLabel='Pay Now'
            token={onToken}  // on success callback triggered on submission
            stripeKey={publishableKey}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    emptyTheCart: () => dispatch(emptyTheCart())
});


export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);