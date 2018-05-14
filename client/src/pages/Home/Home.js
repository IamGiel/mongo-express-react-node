import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import Minitrons from "../../components/Minitrons";



class Home extends Component {
  // state = {
  //   books: [],
  //   name: "",
  //   email: "",
  //   password: ""
  // };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, name: "", email: "", password: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  render() {
    return <div>
        <Container fluid>
          <Jumbotron>
            <h1>See whats Yappin'</h1>
            <p>Blog Freely... 🐶</p>
          </Jumbotron>
        </Container>

        <Container fluid>
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
          <Minitrons fluid />
        </Container>
      </div>;
  }
}

export default Home;
