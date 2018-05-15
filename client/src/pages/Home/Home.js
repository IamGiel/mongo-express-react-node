import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import Friend from  "../../components/FriendCard";
import bloggerAPI from "../../utils/bloggerAPI";
import { Link } from "react-router-dom";

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

  deleteBlog= id => {
    bloggerAPI
      .deleteBlogger(id)
      .then(res => this.loadBloggers())
      .catch(err => console.log(err));
  };

  render() {
    return <div>
        <Container fluid>
          <Jumbotron style={{ backgroundColor: "antiquewhite" }}>
            <h1>See whats Yappin'</h1>
            <p>
              Blog Freely... <span role="img" aria-label="Dog">
                🐶
              </span>
              <p>Respond to any topic below or... </p>
              <FormBtn>
                <Link to={"/blogform/"}>Share a Yap</Link>{" "}
              </FormBtn>
            </p>
          </Jumbotron>
        </Container>
        {console.log(this.state.bloggers)}

        {this.state.bloggers.length ? <Container fluid>
            {this.state.bloggers.map(bloggerPerson => (
              <Friend
                key={bloggerPerson._id}
                image={bloggerPerson.image}
                name={bloggerPerson.name}
                subject={bloggerPerson.subject}
                about={bloggerPerson.about}
              />
            ))}
          </Container> : <Container>
            <h3>No Bloggers yet</h3>
          </Container>}
      </div>;
  }
}

export default Blogger;
