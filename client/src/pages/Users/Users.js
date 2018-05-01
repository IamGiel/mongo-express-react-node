import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";

import API from "../../utils/API";

class userDetail extends Component {
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
          // users: res.data,
          name: "",
          lastName: "",
          email: "",
          password: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Users List</h1>
            </Jumbotron>
            {this.state.users.length ? <List>
                {console.log(this.state.users)}
                {this.state.users.map(book => <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.name} {book.email}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>)}
              </List> : <h3>No Results to Display</h3>}
          </Col>

          
          <Col size="md-6 sm-12" />
        </Row>
      </Container>;
  }
}

export default userDetail;
