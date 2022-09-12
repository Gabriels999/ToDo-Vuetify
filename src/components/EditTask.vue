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
              v-model="title"
              :rules="titleRules"
              label="Title"
              required
            ></v-text-field>

            <v-select
              class="mb-5"
              v-model="state"
              :items="stateOptions"
              :rules="[(v) => !!v || 'state eh obrigatorio.']"
              label="State"
              required
            ></v-select>

            <v-select
              class="mb-5"
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Group"
              required
            ></v-select>

            <v-row>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Expiration"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

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
  props: ["task"],
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,

    valid: true,
    title: "",
    titleRules: [(v) => !!v || "title is required"],
    select: null,
    items: ["Trabalho", "Estudo", "Lazer", "Financas"],
    state: "Pendente",
    stateOptions: ["Pendente", "Em Andamento", "Concluida"],
  }),

  methods: {
    salvar() {
      let newTask = {
        title: this.title,
        state: this.state,
        group: this.select,
        expiration: this.date,
      };
      this.$emit("novaTarefa", newTask);
    },
    cancelar() {
      this.$refs.form.reset();
    },
  },
  created() {
    this.title = this.task.title;
    this.state = this.task.state;
    this.select = this.task.group;
    this.date = this.task.expiration;
    console.log(this.task);
  },
};
</script>
