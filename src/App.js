import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const currentUser = useSelector((state) => state.user.currentUser);

const App = () => {
  let unsubscribeFromAuth = null;
  const dispatch = useDispatch();

  useEffect(() => {
      unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser(({
              id: snapShot.id,
              ...snapShot.data()
          })));
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
        unsubscribeFromAuth();
      }
    }, []);

  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => 
            currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) 
          } /> 
        </Switch>
    </div>
  );
}

// we need currentuser from state to see if we need to redirect the user or not if they signed in 



export default App;
