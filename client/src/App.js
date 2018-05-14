import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Forum from "./pages/Forum";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";



const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forum/" component={Forum} />
        <Route exact path="/forum/:id" component={Detail} />
        <Route exact path="/search/" component={Search} />
        <Route exact path="/signin/" component={Signin} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
