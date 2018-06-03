import axios from "axios";

export default {
  // Gets all bloggers
  getBloggers: function () {
    return axios.get("/bloggers/blogging");
  },
  // Gets the blogger with the given id
  getBlogger: function (id) {
    return axios.get("/bloggers/blogging/" + id);
  },
  // Deletes the blogger with the given id
  deleteBlogger: function (id) {
    return axios.delete("/bloggers/blogging/" + id);
  },
  // updates the blogger with the given id
  updateBlogger: function (id) {
    return axios.put("/bloggers/blogging/" + id);
  },
  // Saves a blogger to the database
  saveBlogger: function (bloggerData) {
    return axios.post("/bloggers/blogging/", bloggerData);
  },
  //Adds a blog response to the database
  addResponse: data => {
    return axios.post("/bloggers/blogging/response", data)
  },
  //Adds a response reply to the database
  addReply: data => {
    return axios.post("/bloggers/blogging/reply", data)
  }
};
