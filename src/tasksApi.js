import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export default {
  getTasks(cb) {
    axios.get("/tasks").then((r) => cb(r.data));
  },
  getTask(taskId, cb) {
    axios.get(`/tasks/${taskId}`).then((r) => cb(r.data));
  },
  postTask(task, cb) {
    axios.post("/tasks", task).then((r) => cb(r.data));
  },
  deleteTask(taskId, cb) {
    axios.delete(`/tasks/${taskId}`).then((r) => cb(r.data));
  },
};
