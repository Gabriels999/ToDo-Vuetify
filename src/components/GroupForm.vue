<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col>
        <v-card></v-card>
      </v-col>
      <v-col>
        <v-card class="pa-7">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              class="mb-5"
              v-model="nome"
              :rules="nomeRules"
              label="Nome"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mb-1"
              @click="salvar"
            >
              Salvar
            </v-btn>

            <router-link to="/">
              <v-btn color="error" class="mr-4 mb-1"> Cancelar </v-btn>
            </router-link>
          </v-form>
        </v-card>
      </v-col>
      <v-col>
        <v-card></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    nome: "",
    nomeRules: [(v) => !!v || "Nome eh obrigatorio"],
  }),

  methods: {
    salvar() {
      this.$emit("novoGrupo", this.nome);
    },
    cancelar() {
      this.$refs.form.reset();
    },
  },
};
</script>
