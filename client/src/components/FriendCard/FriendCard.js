import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.imgUrl} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Yap'n about:</strong> {props.subject}
        </li>
        <li>
          <strong>Yap:</strong> {props.yap}
        </li>
      </ul>
    </div>
    <button onClick={() => props.removeFriend(props.id)} className="remove">
      comment
    </button>
  </div>
);

export default FriendCard;
