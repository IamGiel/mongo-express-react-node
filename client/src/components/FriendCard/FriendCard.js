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
    <button className="likeemoji">
      <span role="img" aria-label="thumbsup">
        👍
      </span>
    </button>
    <button onClick={() => props.incrementLike(props.id)} className="increment">
      comment
    </button>
  </div>
);

export default FriendCard;
