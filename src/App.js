import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { Home, Hats } from "./pages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
