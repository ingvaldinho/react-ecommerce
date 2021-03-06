import React, {useEffect} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './page/checkout/checkout.component';
import Header from './component/header/header.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';
 

const App = ({checkUserSession,currentUser})=>{
  
    useEffect(()=>{
      checkUserSession();
    },[checkUserSession])

    return (
      <div>
      <GlobalStyle />
        <Header/>
        <Switch>              
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>

          <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>) } />
        </Switch>
      </div>
  )
  } 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispachToProps = dispach =>({
  checkUserSession: ()=> dispach(checkUserSession())
})


export default connect(mapStateToProps,mapDispachToProps)(App);
