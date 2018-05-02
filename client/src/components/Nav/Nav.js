import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <ul className="right">
  <a href="/" className="navbar-brand">
    YAP{" "}
    <span role="img" aria-label="Dog">
      🐶
    </span>{" "}
    YAP RDU
  </a>
        <a href="/forum" className="navbar-brand right">
          Forum
        </a>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
