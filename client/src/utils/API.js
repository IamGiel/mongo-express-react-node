import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/users", bookData);
  }
};
