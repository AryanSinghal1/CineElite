import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import SignupUsers from "./SignupUsers";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Verify from "./Verify";
import Overview from "./Overview";
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
        <Route exact path="/overview">
          <Overview/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
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
