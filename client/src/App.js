import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
      <Home/>
      </Route>
        <Route exact path='/login'>
      {/* <Home/> */}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
