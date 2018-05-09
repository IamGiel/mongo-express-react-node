import React from "react";
import "./Nav.css";

const Nav = () => (
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a href="/" className="navbar-brand">
            YAP{" "}
            <span role="img" aria-label="Dog">
              🐶
            </span>{" "}
            YAP RDU
          </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li> 
        <li><a href="#">Page 3</a></li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;

{
  /* <ul className="right">
          <a href="/" className="navbar-brand yapyap">
            YAP{" "}
            <span role="img" aria-label="Dog">
              🐶
            </span>{" "}
            YAP RDU
          </a>
          <a href="/forum" className="navbar-brand right">
            Forum
          </a>
          <a href="/search" className="navbar-brand right">
            Search<span role="img" aria-label="Search">
              🕵🏻
            </span>{" "}
          </a>
        </ul> */
}
