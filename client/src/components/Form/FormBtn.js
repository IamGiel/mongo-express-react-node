import React from "react";
import "./FormBtn.css"


export const FormBtn = props =>
  <button {...props} 
    className="btn btn-primary startyapping">
    {props.children}
  </button>;
