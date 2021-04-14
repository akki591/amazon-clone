import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./Orders";

const promise = loadStripe('pk_test_51IOJ2rAJvhPHBzKnjjYeP6bLc7lQXM0oLI2m1h7khYpusagKn9ESixlM2bicV9j7sasdVOxOcQLiWYig7utyntBV00DPLEnQIJ');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // only run once when the app component load..

    auth.onAuthStateChanged(authUser => {
      // console.log('The User Is :',authUser);
      if(authUser)
      {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else
      {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
