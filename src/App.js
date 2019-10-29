import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import {auth, createUserprofileDocument} from './firebase/firebase.utils';

 

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubsribeFromAuth= null;

  componentDidMount(){
    this.unSubsribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{
     
      if(userAuth){
         const userRef = await createUserprofileDocument(userAuth);
         console.log(userRef);
        
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }) 
          console.log(this.state);
        })
      }else{
        this.setState({currentUser: userAuth});
      }
      

    });


    
  }

  componentWillUnmount(){
    this.unSubsribeFromAuth();
  }

  render(){
    return (
      <div className="homepage">
        <Header currentUser={this.state.currentUser} />
        <Switch>              
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
  )
  }

}

export default App;
