import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import bloggerAPI from "../../utils/bloggerAPI";
import { Link } from "react-router-dom";

import "../styling/BlogForm.css"



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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.imgUrl &&
      this.state.name &&
      this.state.subject &&
      this.state.yap
    ) {
      bloggerAPI
        .saveBlogger({
          imgUrl: this.state.imgUrl,
          name: this.state.name,
          subject: this.state.subject,
          yap: this.state.yap
        })
        .then(res => this.loadBloggers())
        .catch(err => console.log(err));
    }
  };

  render() {
    //renders the form to post a blog card
    return <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                Start a yap! <span role="img" aria-label="Dog">
                  🐶
                </span>
              </h1>
            </Jumbotron>
            <form>
              <Input value={this.state.imgUrl} onChange={this.handleInputChange} name="imgUrl" placeholder="image url with .jpg .png .gif (required)" />
              <Input value={this.state.name} onChange={this.handleInputChange} name="name" placeholder="name (required)" />
              <Input value={this.state.subject} onChange={this.handleInputChange} name="subject" placeholder="subject (required)" />
              <textarea className="blogfrmTxt" value={this.state.yap} onChange={this.handleInputChange} name="yap" placeholder="yap (required)" />

              <button className="btn btn-warning aboutsubmit" disabled={!(this.state.imgUrl && this.state.name && this.state.subject && this.state.yap)} onClick={this.handleFormSubmit}>
                <Link to={"/"}>Submit</Link>
              </button>
            </form>
          </Col>
          <Col size="md-6 sm-12" />
        </Row>
      </Container>;
  }
}

export default Blogger;
