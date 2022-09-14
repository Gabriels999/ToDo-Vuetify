<template>
  <div class="about">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="sm"></v-col>
        <v-col cols="sm">
          <v-card class="pa-4">
            <h2>Que bom ter voce por aqui de novo!</h2>
            <login-form></login-form>
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

export default {
  components: {
    LoginForm,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
