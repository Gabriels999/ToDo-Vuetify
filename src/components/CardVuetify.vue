<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{ task.title }}</v-card-title>

    <v-card-text>
      <div
        class="my-4 text-subtitle-1"
        style="display: flex; justify-content: space-around"
      >
        Prazo: {{ task.expiration }} <span> {{ task.group }}</span>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Status</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Pendente</v-chip>

        <v-chip>Em Andamento</v-chip>

        <v-chip>Concluida</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between mb-6">
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Atualizar
      </v-btn>
      <modal-delete :task="task" @exclui="confirma($event)"></modal-delete>
    </v-card-actions>
  </v-card>
</template>

<script>
import ModalDelete from "./ModalDelete.vue";

export default {
  components: {
    ModalDelete,
  },
  props: ["task"],
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
      this.$router.push(`/edit/${this.task.id}`);
    },
    confirma(event) {
      this.$emit("exclui", event);
    },
  },
};
</script>
