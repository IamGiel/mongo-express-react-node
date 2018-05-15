import axios from "axios";

export default {
  // Gets all bloggers
  getBloggers: function() {
    return axios.get("/bloggers/bloggers");
  },
  // Gets the blogger with the given id
  getBlogger: function(id) {
    return axios.get("/bloggers/bloggers/" + id);
  },
  // Deletes the blogger with the given id
  deleteBlogger: function(id) {
    return axios.delete("/bloggers/bloggers/" + id);
  },
  // Saves a blogger to the database
  saveBlogger: function(bloggerData) {
    return axios.post("/bloggers/bloggers/", bloggerData);
  }
};
