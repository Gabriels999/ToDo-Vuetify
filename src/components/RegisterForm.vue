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
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :counter="10"
      label="Senha"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Aceita os termos?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <div class="mt-4">
      <v-btn class="mr-4" @click="submit"> Criar </v-btn>
      <v-btn @click="clear"> Limpar </v-btn>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required, maxLength: maxLength(10) },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    password: "",
    email: "",
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Voce deve aceitar para prosseguir!");
      return errors;
    },
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
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("O email deve ser valido.");
      !this.$v.email.required && errors.push("E-mail eh obrigatorio");
      return errors;
    },
  },

  methods: {
    submit() {
      const newUser = {
        name: this.name,
        password: this.password,
        email: this.email,
      };
      this.$emit("createUser", newUser);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
      this.checkbox = false;
    },
  },
};
</script>
