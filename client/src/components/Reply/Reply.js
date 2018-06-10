import React from "react";
import timeSince from "../../utils/timeSince"


const Reply = props => (
    <div>
        <div>Name: {props.name}</div>
        <div>{timeSince(props.date)}</div>
        <p>{props.text}</p>
    </div>
)

export default Reply;