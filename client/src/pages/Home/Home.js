import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import Friend from  "../../components/FriendCard";



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
          <Friend image="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" name="Gel" specialty="web wizard" about="Who took the last cookie from the cookie jar!?" />
          <Friend image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSTY_AM9KwNdNcIoquC8wKNXNMW2IZfdPoi0cbm2-gkA2I-K-" name="Mike" specialty="the goat" about="Who took the last cookie from the cookie jar!?" />
          <Friend image="http://photodoto.com/wp-content/uploads/2013/01/54-self-portrait.jpg" name="John" specialty="rainbow chaser" about="Who took the last cookie from the cookie jar!?" />
        </Container>
      </div>;
  }
}

export default Home;
