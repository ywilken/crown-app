import React from 'react';
// Now we import the Route Component
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* We will leave the Header Component outside the Switch, so it will be displayed on all pages*/}
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

export default App;



