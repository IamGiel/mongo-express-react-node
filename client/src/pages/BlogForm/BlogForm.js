import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";


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

  deleteBlog = id => {
    bloggerAPI
      .deleteBlogger(id)
      .then(res => this.loadBloggers())
      .catch(err => console.log(err));
  };

  render() {//renders the form to post a blog card
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Start a Yap! <span>🐶</span></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={
                  !(this.state.name && this.state.email && this.state.password)
                }
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12" />
        </Row>
      </Container>
    );
  }
}

export default BlogForm;
