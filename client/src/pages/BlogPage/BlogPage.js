import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import bloggerAPI from "../../utils/bloggerAPI";

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
    return (
      <Container fluid>
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
              <h1>But heres your chance to speak yourself...</h1>
              <p>Post a exchange blog here</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BlogPage;
