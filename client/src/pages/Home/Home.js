import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import Friend from  "../../components/FriendCard";



class Home extends Component {
  state = {
    books: [],
    name: "",
    email: "",
    password: ""
  };

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
            <p>
              Blog Freely... <span role="img" aria-label="Dog">
                🐶
              </span>
              <FormBtn>Be a Yap blogger</FormBtn>
            </p>
          </Jumbotron>
        </Container>

        <Container fluid>
          <Friend image="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" name="Gel" yapAbout="cookie jars" about="Who took the last cookie from the cookie jar!?" />
          <Friend image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSTY_AM9KwNdNcIoquC8wKNXNMW2IZfdPoi0cbm2-gkA2I-K-" name="Mike" yapAbout="Election in Tarzus" about="I say abandon ship in Tarzus!!!" />
          <Friend image="http://photodoto.com/wp-content/uploads/2013/01/54-self-portrait.jpg" name="John" yapAbout="Boston Celtics" about="If only Kyrie is not injured... smh" />
          <Friend image="http://www.pnas.org/content/pnas/early/2017/12/19/1721196115/F1.large.jpg" name="Chris" yapAbout="Tech" about="the internet of things... pretty soon I dont have to move a muscle..." />
        </Container>
      </div>;
  }
}

export default Home;
