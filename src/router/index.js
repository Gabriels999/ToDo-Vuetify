import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import CreateTaskView from "@/views/CreateTaskView.vue";
import UpdateTaskView from "@/views/UpdateTaskView.vue";
import CreateGroupView from "@/views/CreateGroupView.vue";
import TesteView from "@/views/TesteView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateTaskView,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: UpdateTaskView,
  },
  {
    path: "/teste",
    name: "teste",
    component: TesteView,
  },
  {
    path: "/group/create",
    nome: "createGroup",
    component: CreateGroupView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
