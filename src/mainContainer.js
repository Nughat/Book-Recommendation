// import React, { Component } from "react";
// import "./App.css";

// const MainContainer = () => {
//     return(
//         <div>
//             Hello!
//         </div>
//     )
// }

// export default MainContainer;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";


const MainContainer = () => {
  return (
    <Router>
      <div>
        <nav>
          
              <Link to="/">Home</Link>
            
              <Link to="/signup">Signup</Link>
           
              <Link to="/login">Login</Link>
           
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export {MainContainer}