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
        <a href="/home" className="navbar-brand">
          YAP{" "}
          <span role="img" aria-label="Dog">
            🐶
          </span>{" "}
          YAP RDU
        </a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li>
            <a href="/forum">
              Yap Sports{" "}
              <span role="img" aria-label="Dog">
                🏈
              </span>{" "}
            </a>
          </li>
          <li>
            <a href="/search">
              Yap Food{" "}
              <span role="img" aria-label="Dog">
                🍣
              </span>{" "}
            </a>
          </li>
          <li>
            <a href="/health">
              Yap Health{" "}
              <span role="img" aria-label="meds">
                💪
              </span>{" "}
            </a>
          </li>
          <li>
          <a href="/places">
            Yap Places{" "}
            <span role="img" aria-label="meds">
              🏖
            </span>{" "}
          </a>
          </li>
          <li>
            <a href="/contact">
              Yap Contacts{" "}
              <span role="img" aria-label="contacts">
                📧
              </span>{" "}
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="">
              <span class="glyphicon glyphicon-user" /> Sign Up
            </a>
          </li>
          <li>
            <a href="">
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
