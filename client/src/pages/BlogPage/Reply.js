import React from "react";

const Reply = props => (
    <div>
        <div>Name: {props.name}</div>
        <div>Date: {props.date}</div>
        <p>Reply: {props.text}</p>
    </div>
)

export default Reply;