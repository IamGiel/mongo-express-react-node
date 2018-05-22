import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import Friend from "../../components/FriendCard";
import bloggerAPI from "../../utils/bloggerAPI";
import { Link } from "react-router-dom";
import Hover from "../../components/Hover/Hover";

import "../styling/FormBtn.css";

class Blogger extends Component {
  state = {
    bloggers: [],
    imgUrl: "",
    name: "",
    subject: "",
    yap: "",
    approval: 0
  };

  componentDidMount() {
    this.loadBloggers();
  }

  loadBloggers = () => {
    bloggerAPI
      .getBloggers()
      .then(res =>
        this.setState({
          bloggers: res.data,
          imgUrl: "",
          name: "",
          subject: "",
          yap: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron style={{ backgroundColor: "antiquewhite" }}>
            <h1>See whats Yappin'</h1>
            <p>
              Blog Freely...{" "}
              <span role="img" aria-label="Dog">
                🐶
              </span>
              {/* <p>Respond to any topic below or... </p> */}
              <button className="beginYapping">
                <Link to={"/blogform/"}>Share a Yap</Link>{" "}
              </button>
            </p>
          </Jumbotron>
        </Container>
        {console.log(this.state.bloggers)}

        {this.state.bloggers.length ? (
          <Container fluid>
            {this.state.bloggers.map(bloggerPerson => (
              <Hover key={bloggerPerson._id}>
                <Link to={"/blogpage/" + bloggerPerson._id}>
                  <Friend
                    key={bloggerPerson._id}
                    imgUrl={bloggerPerson.imgUrl}
                    name={bloggerPerson.name}
                    subject={bloggerPerson.subject}
                    yap={bloggerPerson.yap}
                  />
                </Link>
              </Hover>
            ))}
          </Container>
        ) : (
          <Container>
            <h3>Start a spark... yap on! </h3>
          </Container>
        )}
      </div>
    );
  }
}

export default Blogger;
