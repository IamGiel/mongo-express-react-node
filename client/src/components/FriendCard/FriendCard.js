import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Specialty:</strong> {props.specialty}
        </li>
        <li>
          <strong>Yap:</strong> {props.about}
        </li>
      </ul>
    </div>
    <button onClick={() => props.removeFriend(props.id)} className="remove">
      comment
    </button>
  </div>
);

export default FriendCard;
