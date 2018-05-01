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
        <a href="/" className="navbar-brand text-primary">
          YAP{" "}
          <span role="img" aria-label="Panda">
            🐶
          </span>{" "}
          YAP
        </a>
        <a href="/users" className="navbar-brand">
          User Profile
        </a>
        <a href="/forum" className="navbar-brand">
          Forum
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
