import React, { Component } from "react";
import Hover from "../../components/Hover/Hover"
import "../styling/Test.css";

class Test extends Component {
  render() {
    return (
      <Hover>
        <div className="test-div">
      <h1>Testing this div for hover</h1>
      <p>Testing this child div</p>
      </div>
      </Hover>
    );
  }
}

export default Test;
