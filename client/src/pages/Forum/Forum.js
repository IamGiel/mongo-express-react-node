import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import bloggerAPI from "../../utils/bloggerAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Forum extends Component {
  state = {
    blogger: [],
    name: "",
    email: "",
    password: "",
    score:0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bloggerAPI.getBloggers()
      .then(res =>
        this.setState({ blogger: res.data, name: "", email: "", password: "" })
      ).catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Yappers</h1>
            </Jumbotron>
            {console.log(this.state.blogger)}
            {this.state.blogger.length ?
              <List>
                {this.state.blogger.map(yapper => <ListItem key={yapper._id}>
                    <Link to={"/forum/" + yapper._id}>
                      <strong>
                        {yapper.name}
                      </strong> <div style={{ textAlign: "right" }}>
                        integrity score: {this.state.score}
                      </div>
                    </Link>
                  </ListItem>)}
              </List> : <h3>No Results to Display</h3>}
          </Col>

          <Col size="md-6 sm-12" />
        </Row>
      </Container>;
  }
}

export default Forum;
