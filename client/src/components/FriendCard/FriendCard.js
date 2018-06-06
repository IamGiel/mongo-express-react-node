import React from "react";
import "../../pages/styling/FriendCard.css";

const FriendCard = props => (
  <div className="card hoverEffect">
    <a href="/blogform/">
      <div className="img-container">
        <img alt={props.name} src={props.imgUrl} className="img-styling"/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Title:</strong> {props.subject}
          </li>
          <li>
            <strong>Yap:</strong> {props.yap}
          </li>
        </ul>
      </div>
      <button className="likeemoji">
        <span role="img" aria-label="thumbsup">
          {props.score} 👍
        </span>
      </button>
    </a>
  </div>
);

export default FriendCard;
