import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link clasName='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?  // does the currentUser exist? (is the user signed in?)
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    : 
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null: <CartDropdown />
            }
        </div>
    )
}

// const mapStateToProps = (state) => ({  
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });
// Incase we have to use multiple selectors for a single component, we can use the `createStructuredSelector`
// provided by 'reselect'
const mapStateToProps = createStructuredSelector({  
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
