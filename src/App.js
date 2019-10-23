import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';



const HatsPage = ()=>(
  <div>
  <h1>Hats Page</h1>
  </div>
)
  

function App(){
  return (
      <div className="homepage">
        <Switch>              
          <Route exact path='/' component={HomePage}/>
          <Route path='/hats' component={HatsPage}/>
        </Switch>
      </div>
  )
}

export default App;
