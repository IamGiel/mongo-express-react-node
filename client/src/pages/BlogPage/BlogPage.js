import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import bloggerAPI from "../../utils/bloggerAPI";
import Button from "../../components/Buttons";
import "../styling/BlogPage.css";

// just to style the image
// const imgStyle = {
//   height: "11em",
//   width: "15em",
//   float: "right"
// };

const imgStyle = {
  outline: "10px",
  outlineStyle: "outset",
  height: "100%",
  maxHeight: "200px"
}

const blogTitle = {
  fontFamily: "Oswald"
}

const blogBody = {
  fontFamily: "Arimo"
}

class BlogPage extends Component {
  state = {
    bloggerDetail: {},
    score: 0
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
          score: res.data.score
        })
      )
      .catch(err => console.log(err));
  };

  submitLikeBtn = event => {
    // //when this is clicked, increment the score on forum page.

    event.preventDefault();
    // this.setState({
    //   score: this.state.bloggerDetail.score
    // })

    bloggerAPI
      .updateBlogger(this.props.match.params.id)
      .then(res =>
        this.setState({
          score: res.data.score
        })
      )
    }

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
          <Col size="md-2"></Col>
          <Col size="md-8">
            {/* putting the blog post inside a panel */}
            <div class="panel panel-default">
              <div class="panel-body">
                <Row>
                  <Col size="md-1"></Col>
                  <Col size="md-10">
                    {/* this is the blog of whoever posts */}
                    <h1 style={blogTitle}>Blog of {this.state.bloggerDetail.name}</h1>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-1"></Col>
                  <Col size="md-10">
                    <img
                      alt={this.state.bloggerDetail.name}
                      src={this.state.bloggerDetail.imgUrl}
                      style={imgStyle}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-1"></Col>
                  <Col size="md-10">
                    <hr/>
                    <h2 style={blogBody}>{this.state.bloggerDetail.yap}</h2>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Comment</h1>
              <p>Post an exchange blog here</p>
              <p>
                Current Score: <span> {this.state.score} </span>
              </p>
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
