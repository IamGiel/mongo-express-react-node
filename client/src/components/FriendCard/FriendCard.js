import React from "react";
import "../../pages/styling/FriendCard.css";

const FriendCard = props => (
  <div className="card hoverEffect">
    <a href="/blogform/">
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
          {props.score} 👍
        </span>
      </button>
    </a>
  </div>
);

export default FriendCard;
