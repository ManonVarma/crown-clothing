import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
// import Brightness6OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
// import SearchBar from "material-ui-search-bar";
import SearchBar from '../search-bar/search-bar.component';
import { IconButton } from '@mui/material';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import SearchPage from '../../pages/searchpage/searchpage.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { emptyTheCart } from '../../redux/cart/cart.actions';
// import { selectSearchedItem } from '../../redux/search/search.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const Header = ({ currentUser, hidden, emptyTheCart }) => {
    const [searchedText, setSearchedText] = useState('');
    let location = useLocation();
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hs', searchedText);
        history.push({
            pathname: '/search',
            state: {
                searchedText: searchedText
            }
        });
    }
    
    const clearSearchInput = () => {
        const searchInput = document.getElementsByClassName('search-input')[0];
            if (searchInput)
                searchInput.value = '';
            setSearchedText('');
    }

    // const searchApparel = (searchedText) => {
    //     if (searchItem==='')
    //         <SearchPage />
    // }
    return (
        <div className='header'>
            <Link 
                className='logo-container' 
                to='/' 
                onClick={clearSearchInput}
            >
                <div style={
                    {
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                >
                    <div style={{marginRight: '15px'}}>
                        <Logo className='logo' />
                    </div>
                    <div>
                        <p className='title'>CROWN CLOTHING</p>
                    </div>
                </div>
            </Link>
            {
                    location.pathname !== '/contact' 
                    && location.pathname !== '/signin' 
                    && location.pathname !== '/checkout'
                    && location.pathname !== '/myorders' ?
                    <div className='search-bar-container'>   
                        <SearchBar
                            handleSubmit={handleSubmit} 
                            setSearchedText={setSearchedText}  
                            
                        />
                    </div>
                    : null
            }
            <div className='options'>
                <Link 
                    className='option' 
                    to='/shop'
                    onClick={clearSearchInput}
                >
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                <Link className={currentUser? 'option': ''} to='/myorders'>
                {
                    currentUser ?
                    <div>MY ORDERS</div> : null
                }
                </Link>
                {
                    currentUser ?  // does the currentUser exist? (is the user signed in?)
                    <div className='option' onClick={() => {
                        auth.signOut();
                        history.replace('/');
                        emptyTheCart();
                    }}>
                        SIGN OUT
                    </div>
                    : 
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <div className="cart-icon-container">
                    <IconButton>
                        <CartIcon />
                    </IconButton>
                </div>
                {
                    hidden ? 
                    null
                    : 
                    <div className='cart-dropdown-container'><CartDropdown /></div>
                }
            </div>
                {/* <IconButton>
                    <Brightness6OutlinedIcon className='dark-mode-icon' />
                </IconButton> */}
        </div>
    );
}

// const mapStateToProps = (state) => ({  
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });
// Incase we have to use multiple selectors for a single component, we can use the `createStructuredSelector`
// provided by 'reselect'
const mapStateToProps = createStructuredSelector({  
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    emptyTheCart: () => dispatch(emptyTheCart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
