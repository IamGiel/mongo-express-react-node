import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import bloggerAPI from "../../utils/bloggerAPI";

class Detail extends Component {
  state = {
    testing: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    bloggerAPI
      .getBlogger(this.props.match.params.id)
      .then(res => this.setState({ testing: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.testing.name} is Yappin' 🗣 Here!</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Yapper Info</h1>
              <p>Reach him @ {this.state.testing.email}</p>
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
export default Detail;
