import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Signup extends Component {
  state = {
    users: [],
    name: "",
    lastName: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getAllUsers()
      .then(res =>
        this.setState({
          users: res.data,
          name: "",
          lastName: "",
          email: "",
          password:""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadUsers())
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
    if (this.state.name && this.state.lastName && this.state.email && this.state.password) {
      API.saveBook({
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sign-Up</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.name &&
                    this.state.lastName &&
                    this.state.email &&
                    this.state.password
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">{/* maybe an image here instead??? */}</Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
