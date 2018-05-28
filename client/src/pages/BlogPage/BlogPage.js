import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import bloggerAPI from "../../utils/bloggerAPI";
import Button from "../../components/Buttons";
import "../styling/BlogPage.css";

// just to style the image
const imgStyle = {
  height: "11em",
  width: "15em",
  float: "right"
};

class BlogPage extends Component {
  state = {
    bloggerDetail: {},
    score: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBloggers();
  }

  loadBloggers = () => {
    bloggerAPI
      .getBlogger(this.props.match.params.id)
      .then(res =>
        this.setState({
          bloggerDetail: res.data,
          score: ""
        })
      )
      .catch(err => console.log(err));
  };

  submitLikeBtn = event => {
    //when this is clicked, increment the score on forum page.
  
    event.preventDefault();
      const newScore = this.state.score++;
      console.log("this is working...", this.state.score);

    if (this.state.score > 1) {
      bloggerAPI
        .saveBlogger({
          score: newScore
        })
        .then(res => this.loadBloggers())
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    //also translates to...
    // const name = event.target.name
    // const value = event.target.value
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img
                alt={this.state.bloggerDetail.name}
                style={imgStyle}
                src={this.state.bloggerDetail.imgUrl}
              />
              <h1>{this.state.bloggerDetail.name} is Yappin' 🗣 Here!</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>But heres your chance to say what you think...</h1>
              <p>Post an exchange blog here</p>
              <textarea
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <div className="like-blogPage">
              Like {this.state.bloggerDetail.name}'s thread and spark an
              interest.
              <Button onClick={this.submitLikeBtn}>
                <span role="img" aria-label="thumbs">
                  👍
                </span>{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BlogPage;
