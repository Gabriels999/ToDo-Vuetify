<template>
  <div class="about">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="sm"></v-col>
        <v-col cols="sm">
          <v-card class="pa-4">
            <h2>Que bom ter voce por aqui de novo!</h2>
            <login-form @credentials="abacate($event)"></login-form>
            <p class="mt-5">
              Primeira vez? Crie sua conta
              <router-link to="register">aqui</router-link>.
            </p>
          </v-card>
        </v-col>
        <v-col cols="sm"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";

import userApi from "@/tasksApi.js";

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      users: [],
      user: {},
    };
  },
  methods: {
    abacate(event) {
      userApi.getUsers((data) => (this.users = data));
      this.user = event;
    },
    teste() {
      let liberado = false;
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.users[i].name == this.user.name &&
          this.users[i].password == this.user.password
        ) {
          console.log("credenciais certas!!!");
          liberado = true;
        }
      }
      if (liberado == true) {
        this.$router.push({ name: "home" });
      } else {
        console.log("subir o toast informando erro");
      }
    },
  },
  watch: {
    users() {
      this.teste();
    },
  },
};
</script>
