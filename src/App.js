import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';

 

function App(){
  return (
      <div className="homepage">
        <Header/>
        <Switch>              
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
  )
}

export default App;
