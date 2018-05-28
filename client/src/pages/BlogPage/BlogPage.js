import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import bloggerAPI from "../../utils/bloggerAPI";
import Button from "../../components/Buttons"
import "../styling/BlogPage.css";

// just to style the image 
const imgStyle = {
  height: "11em",
  width: "15em",
  float: "right"
};


class BlogPage extends Component {
  state = {
    bloggerDetail: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBloggers();
  }

  loadBloggers = () => {
    bloggerAPI
      .getBlogger(this.props.match.params.id)
      .then(res => this.setState({ bloggerDetail: res.data }))
      .catch(err => console.log(err));
  };

  handleLikeBtn = event => {
    //when this is clicked, increment the score on forum page.
    event.preventDefault();
    this.state.bloggerDetail.score++;
    console.log("this is working...", this.state.bloggerDetail.score);
    bloggerAPI
      .saveBlogger({
        score: this.state.bloggerDetail.score
      })
      .then(res => this.loadBloggers())
      .catch(err => console.log(err));
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
          <Col size="md-2"></Col>
          <Col size="md-8">
            <div class="panel panel-default">
              <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                  <img
                  alt={this.state.bloggerDetail.name}
                  style={imgStyle}
                  src={this.state.bloggerDetail.imgUrl}
                  class="center-block"
                  />
                </Col>
              </Row>
              <Row>
                <Col size="md-2"></Col> 
                <Col size="md-8">
                  <article>
                    <h3>Comment</h3>
                    <textarea>write here.</textarea>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col size="md-2"></Col>
                <Col size="md-2">
                  <div className="like-blogPage">
                    Like {this.state.bloggerDetail.name}'s thread and spark an
                    interest.
                    <Button onClick={this.handleLikeBtn}>
                      <span role="img" aria-label="thumbs">
                        👍
                      </span>{" "}
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BlogPage;
