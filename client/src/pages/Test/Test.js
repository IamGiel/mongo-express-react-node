import React, { Component } from "react";
import "./Test.css";

class Test extends Component {
  drag_drop = (event) => {
    event.preventDefault();
    alert(event.dataTransfer.files[0]);
    alert(event.dataTransfer.files[0].name);
    alert(event.dataTransfer.files[0].size + " bytes");
    /*  This is where to begin uploading the file with Ajax and upload progress bar to PHP script */
    /*   https://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP */
  };

  returnFalse = (event) => {
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div>
        <h1>File Upload Drop Zone</h1>
        <div
          className="drop_zone"
          onDrop={this.drag_drop}
          ondragover={"return false"}
        />
      </div>
    );
  }
}

export default Test;
