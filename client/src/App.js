import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import SignupUsers from "./SignupUsers";
import SetPassword from "./SetPassword";
import Login from "./Login";
import Verify from "./Verify";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admInvite">
          <Home />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route exact path="/admverify">
          <SignupUsers />
        </Route>
        <Route exact path="/pass">
          <SetPassword />
        </Route>
        <Route exact path="/verify">
          <Verify />
        </Route>
        <Route exact path="/userlogin">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
