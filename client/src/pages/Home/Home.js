import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import Friend from  "../../components/FriendCard";
import bloggerAPI from "../../utils/bloggerAPI";
import { Link } from "react-router-dom";
import { List } from "../../components/List";

class Blogger extends Component {
  state = {
    bloggers: [],
    imgUrl: "",
    name: "",
    subject: "",
    yap: "",
    approval:0
  };

  

  componentDidMount() {
    console.log(this.state.bloggers);
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
          yap:""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBlog= id => {
    bloggerAPI
      .deleteBlogger(id)
      .then(res => this.loadBloggers())
      .catch(err => console.log(err));
  };

  render() {
    return <div>
        <Container fluid>
          <Jumbotron style={{ backgroundColor : "antiquewhite"}}>
            <h1>See whats Yappin'</h1>
            <p>
              Blog Freely... <span role="img" aria-label="Dog">
                🐶
              </span>
              <FormBtn>Be a Yap blogger</FormBtn>
            </p>
          </Jumbotron>
        </Container>

        <Container fluid>
          {this.state.bloggers.length ? <List>
              {this.state.bloggers.map(bloggerPerson => (
                <Friend key={bloggerPerson._id}>
                  <Link to={"/bloggers/" + bloggerPerson._id}>
                    <strong>{bloggerPerson.name}</strong>{" "}
                    <div style={{ textAlign: "right" }}>
                      integrity score: 7/10
                    </div>
                  </Link>
                </Friend>
              ))}
            </List> : <h3>No Bloggers yet</h3>}
        </Container>
      </div>;
  }
}

export default Blogger;
