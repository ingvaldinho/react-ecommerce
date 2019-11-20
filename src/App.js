import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux'

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';

import {auth, createUserprofileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
 

class App extends React.Component{


  unSubsribeFromAuth= null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubsribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{
     
      if(userAuth){
         const userRef = await createUserprofileDocument(userAuth);
         console.log(userRef);
        
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({           
              id: snapshot.id,
              ...snapshot.data()            
          }) 
          console.log(this.state);
        })
      }else{
        setCurrentUser(userAuth);
      }
      

    });


    
  }

  componentWillUnmount(){
    this.unSubsribeFromAuth();
  }

  render(){
    return (
      <div className="homepage">
        <Header/>
        <Switch>              
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>) } />
        </Switch>
      </div>
  )
  } 
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
