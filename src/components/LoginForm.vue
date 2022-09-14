<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Nome"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :counter="10"
      label="Senha"
      type="password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <div class="mt-4">
      <v-btn class="mr-4" @click="submit"> Entrar </v-btn>
      <v-btn @click="clear"> Limpar </v-btn>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required, maxLength: maxLength(10) },
  },

  data: () => ({
    name: "",
    password: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Nome deve ter no minimo 10 caracteres.");
      !this.$v.name.required && errors.push("Nome eh obrigatorio.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Senha deve ter no minimo 10 caracteres.");
      !this.$v.name.required && errors.push("Senha eh obrigatoria.");
      return errors;
    },
  },

  methods: {
    submit() {
      const user = {
        name: this.name,
        password: this.password,
      };
      this.$emit("credentials", user);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
    },
  },
};
</script>
