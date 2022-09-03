import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Signup from "./Signup";
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
      </Switch>
    </div>
  );
}

export default App;
