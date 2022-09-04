import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Signup from "./Signup";
import SignupUsers from "./SignupUsers";
import SetPassword from "./SetPassword";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
      <Home/>
      </Route>
        <Route exact path='/login'>
      <Signup/>
      </Route>
        <Route exact path='/admlogin'>
      <SignupUsers/>
      </Route>
        <Route exact path='/pass'>
          <SetPassword/>
      </Route>
        <Route exact path='/userlogin'>
          <Login/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
