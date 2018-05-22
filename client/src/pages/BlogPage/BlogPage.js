import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    bloggerAPI.getBlogger(this.props.match.params.id)
      .then(res => this.setState({ bloggerDetail: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img style={imgStyle} src={this.state.bloggerDetail.imgUrl} />
              <h1>{this.state.bloggerDetail.name} is Yappin' 🗣 Here!</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>But heres your chance to say what you think...</h1>
              <p>Post an exchange blog here</p>
              <textarea>
                write here.
              </textarea>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <div className="like-blogPage">
              Like {this.state.bloggerDetail.name}'s thread and spark an interest.
              <Button>
                <span role="img" aria-label="thumbs">
                  👍
                </span>{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>;
  }
}
export default BlogPage;
