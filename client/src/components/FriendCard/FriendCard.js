import React from "react";
import { Link } from "react-router-dom";
import "../../pages/styling/FriendCard.css";

const FriendCard = props => (
  <div className="card hoverEffect">
    <Link to="/blogpage/">
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
    </Link>
  </div>
);

export default FriendCard;
