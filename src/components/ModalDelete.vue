<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="red" dark v-bind="attrs" v-on="on">
          Deletar
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Deseja mesmo excluir "{{ task.title }}" ?
        </v-card-title>

        <v-card-title>
          {{ task.title }}
        </v-card-title>
        <v-card-text>
          <div
            class="my-4 text-subtitle-1"
            style="display: flex; justify-content: space-around"
          >
            Prazo: {{ task.expiration }} <span> {{ task.group }}</span>
          </div>
        </v-card-text>
        <v-card-text>
          <v-chip-group>
            {{ task.state }}
          </v-chip-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Cancelar </v-btn>
          <v-btn color="red" text @click="confima"> Sim </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    confima() {
      this.$emit("exclui", this.task.id);
      this.dialog = false;
    },
  },
};
</script>
