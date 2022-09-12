import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export default {
  getTasks(cb) {
    axios.get("/tasks").then((r) => cb(r.data));
  },
};
