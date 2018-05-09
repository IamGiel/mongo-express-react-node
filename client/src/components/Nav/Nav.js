import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
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
          <li class="active">
            <a href="/">
              
              <span role="img" aria-label="Dog">
                🐶
              </span>{" "}
              HOME
            </a>
          </li>
          <li>
            <a href="/forum">
              My Favorite Sports Team
            </a>
          </li>
          <li>
            <a href="/search">
              Search<span role="img" aria-label="Search">
                🕵🏻
              </span>{" "}
            </a>
          </li>
          <li>
            <a href="#">I am skilled</a>
          </li>
          <li>
            <a href="#">I need help</a>
          </li>
          <li>
            <a href="#">Health Forum</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user" /> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-log-in" /> Login
            </a>
          </li>
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
