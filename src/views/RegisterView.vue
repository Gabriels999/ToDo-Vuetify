<template>
  <div class="about">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="sm"></v-col>
        <v-col cols="sm">
          <v-card class="pa-4">
            <h2>Crie sua conta!</h2>
            <register-form @createUser="registraUser($event)"></register-form>
            <p class="mt-5">
              Ja tem conta? Entre <router-link to="login">aqui</router-link>.
            </p>
          </v-card>
        </v-col>
        <v-col cols="sm"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";

import usersApi from "@/tasksApi.js";

export default {
  components: {
    RegisterForm,
  },
  data() {
    return {};
  },
  methods: {
    registraUser(event) {
      usersApi.createUser(event, () => this.$router.push({ name: "login" }));
      //toast para comunicar a realizacao da criacao
    },
  },
};
</script>
