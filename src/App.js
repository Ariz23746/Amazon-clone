import './App.css';
import { useEffect } from "react";
import Header from './Components/Header';
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Components/Checkout"
import Login from './Components/Login';
import { useStateValue } from "./StateContext";
import { auth } from "./firebase";
import Payment from "./Components/Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Components/Orders';

const promise = loadStripe("pk_test_51IvCPeSJuSPGx81f3K7Fxj33md2JekkqVU7btwnmj61Q7htEw4Y47CI3IK0LAANw9t1d8vNf8CVz0gDQBfCcsfMV003s1FGNcB");


function App() {
  const [,dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
    

      if(authUser) {
        dispatch({
          type:"USER_AUTH_TRACKER",
          payload: authUser,
        })
      }
      else {

        dispatch({
          type:"USER_AUTH_TRACKER",
          payload: null,
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        
          <Switch>
            <Route exact path="/" >
                <Header />
                <Home />
            </Route>  
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout/>
            </Route>
            
           
               
          </Switch>
      </div>
    </Router>
  );
}

export default App;
