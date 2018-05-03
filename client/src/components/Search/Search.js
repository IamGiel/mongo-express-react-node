import React from "react";
import "./Search.css";

//this component is just a jumbotron that holds our search page
const Search = () => (
  <div className="jumbotron text-center">
    <h1>See what food is Trending</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
    >
      Powered by Triangle Sports Arena
    </a>
  </div>
);

export default Search;
