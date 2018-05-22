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
import Blogger from "./pages/BlogForm";
import Test from "./pages/Test";
import BlogDetail from "./pages/BlogPage";




const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/test/" component={Test} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup/" component={Signup} />
        <Route exact path="/forum/" component={Forum} />
        <Route exact path="/forum/:id" component={Detail} />
        <Route exact path="/search/" component={Search} />
        <Route exact path="/signin/" component={Signin} />
        <Route exact path="/blogpage/" component={Blogger} />
        <Route exact path="/blogpage/:id" component={BlogDetail} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
