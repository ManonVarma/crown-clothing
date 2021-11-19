import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';  

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import MyOrdersPage from './pages/my-orders/my-orders.component';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import SearchPage from './pages/search-page/search-page.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged(). 
      // This method returns another method: firebase.unsubscribe().
      // this.setState({ currentUser: user });
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        }); 
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {  
    //  When unsubscribeFromAuth() is called inside the componentWillUnmount(), 
    // it now has the value of firebase.unsubscribe(), which executes, closing the session.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route path='/myorders' component={MyOrdersPage} />
            <Route
              exact 
              path='/signin'
              render={
                () => this.props.currentUser ? 
                  (<Redirect to='/' />) 
                  : 
                  (<SignInAndSignUpPage />)
              }/>
              <Route path='/contact' component={ContactPage} />
              <Route path='/search' component={SearchPage} />
          </Switch>
          <Footer/>
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default connect(
//   null, 
//   mapDispatchToProps
// )(App);  // the first argument of the first fxn of connect is `mapStateToProps` 
// & the second is `mapDispatchToProps`, in this case we don't need to mapStateToProps hence, we're passing null
