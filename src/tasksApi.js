import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export default {
  // TASKS
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
  putTask(taskId, task, cb) {
    axios.put(`/tasks/${taskId}`, task).then((r) => cb(r.data));
  },
  // USERS
  createUser(user, cb) {
    axios.post("/users", user).then((r) => cb(r.data));
  },
  // GROUPS
  createGroup(group, cb) {
    axios.post("/groups", group).then((r) => cb(r.data));
  },
};
