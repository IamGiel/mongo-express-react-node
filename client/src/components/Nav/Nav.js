import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          YAP{" "}
          <span role="img" aria-label="Dog">
            🐶
          </span>{" "}
          YAP RDU
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li>
            <a href="/forum/">
              Yap Sports{" "}
              <span role="img" aria-label="Dog">
                🏈
              </span>{" "}
            </a>
          </li>
          <li>
            <a href="/search/">
              Yap Food{" "}
              <span role="img" aria-label="Dog">
                🍣
              </span>{" "}
            </a>
          </li>
          <li>
            <a href="/health/">
              Yap Health{" "}
              <span role="img" aria-label="meds">
                💪
              </span>{" "}
            </a>
          </li>
          <li>
          <a href="/test/">
            Yap Places{" "}
            <span role="img" aria-label="meds">
              🏖
            </span>{" "}
          </a>
          </li>
          <li>
            <a href="/contact/">
              Yap Contacts{" "}
              <span role="img" aria-label="contacts">
                📧
              </span>{" "}
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/signup/">
              <span className="glyphicon glyphicon-user" /> Sign Up
            </a>
          </li>
          <li>
            <a href="/signin/">
              <span className="glyphicon glyphicon-log-in" /> Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;