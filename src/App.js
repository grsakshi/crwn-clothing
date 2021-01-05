import React from 'react';
import './App.css';
import ShopPage from "./pages/shop/shop.component.jsx";
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
