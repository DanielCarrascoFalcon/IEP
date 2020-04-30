import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import PrimerComponente from "./components/PrimerComponente";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Tasks from "./views/Tasks";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
