import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import bloggerAPI from "../../utils/bloggerAPI";
import Button from "../../components/Buttons";
import Response from "./Response";
import "../styling/BlogPage.css";

// just to style the image
// const imgStyle = {
//   height: "11em",
//   width: "15em",
//   float: "right"
// };

const imgStyle = {
  outline: "5px",
  outlineStyle: "outset",
  width: "100%",
  maxWidth: "300px",
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
    score: 0,
    response: "",
    responses: [],
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    //EH TODO - make sure this loads all response and 
    this.loadBloggers();
  }

  loadBloggers = () => {
    bloggerAPI
      .getBlogger(this.props.match.params.id)
      .then(res =>
        this.setState({
          bloggerDetail: res.data,
          score: res.data.score,
          responses: res.data.responses
        })
      )
      .catch(err => console.log(err));
  };

  //Add response to db and then push new response to state
  addResponse = () => {
    bloggerAPI.addResponse({
      blogId: this.state.bloggerDetail._id,
      response: this.state.response
    }).then(response => {
      this.setState({ responses: [...this.state.responses, response.data.response], response: "" })
    })
  }

  submitLikeBtn = event => {
    event.preventDefault();
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
    let responses;
    if (this.state.responses.length !== 0) {
      responses = this.state.responses.map(response => {
        const { _id, name, text, date, replies } = response
        return (
          < Response
            key={_id}
            id={_id}
            name={name}
            text={text}
            date={date}
            replies={replies}
          />
        )
      }
      )
    } else {
      responses = "There are no responses yet."
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            {/* putting the blog post inside a panel */}
            <div className="panel panel-default">
              <div className="panel-body testtest">
                <Row>
                  <Col size="md-1"></Col>
                  <Col size="md-10">
                    <br />
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
                    <hr />
                    <h2 style={blogTitle}>{this.state.bloggerDetail.subject}</h2>
                    <h5>by {this.state.bloggerDetail.name}</h5>

                    <h3 style={blogBody}>{this.state.bloggerDetail.yap}</h3>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <article>
              <h1>Respond</h1>
              <p>Post a response here.</p>
              <p>
                Current Score: <span> {this.state.score} </span>
              </p>
              <textarea
                name="response"
                value={this.state.response}
                onChange={this.handleInputChange}
              />
              <br />
              <Button onClick={this.addResponse}>
                <span>
                  Submit response
                </span>
              </Button>
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
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <h1>Responses</h1>
            <div>{responses}</div>
          </Col>
        </Row>

      </Container>
    );
  }
}
export default BlogPage;
