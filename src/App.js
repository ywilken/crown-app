import React from 'react';
// Now we import the Route Component
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

export default App;



