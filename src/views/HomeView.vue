<template>
  <div>
    <ul class="d-flex flex-row" style="list-style: none">
      <li v-for="tarefa in tarefas" :key="tarefa.id" class="mr-4">
        <card-vuetify
          :task="tarefa"
          @exclui="deletaTarefa($event)"
        ></card-vuetify>
      </li>
    </ul>
    <router-link to="create">
      <button-icon
        :color="'green'"
        :icon="'mdi-plus'"
        style="position: fixed; right: 10px; bottom: 15px"
      ></button-icon>
    </router-link>
  </div>
</template>

<script>
import CardVuetify from "@/components/CardVuetify.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";

import tasksApi from "@/tasksApi.js";

export default {
  components: {
    CardVuetify,
    ButtonIcon,
  },
  data() {
    return {
      tarefas: [],
    };
  },
  methods: {
    buscaTarefas() {
      tasksApi.getTasks((data) => {
        this.tarefas = data;
      });
    },
    deletaTarefa(event) {
      tasksApi.deleteTask(event, () => {
        this.buscaTarefas();
      });
    },
  },
  created() {
    this.buscaTarefas();
  },
};
</script>
