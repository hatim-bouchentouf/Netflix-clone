import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
