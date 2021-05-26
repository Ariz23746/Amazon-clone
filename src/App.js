import './App.css';
import { useEffect } from "react";
import Header from './Components/Header';
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Components/Checkout"
import Login from './Components/Login';
import { useStateValue } from "./StateContext";
import { auth } from "./firebase";


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
