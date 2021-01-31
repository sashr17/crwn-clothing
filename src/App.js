import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { Home, Shop, SignInAndSignUp } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
