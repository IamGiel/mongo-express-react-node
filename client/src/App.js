import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Users from "./pages/Users";
import Nav from "./components/Nav";
import Forum from "./pages/Forum";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/forum" component={Forum} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
