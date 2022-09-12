<template>
  <div>
    <ul class="d-flex flex-row" style="list-style: none">
      <li v-for="tarefa in tarefas" :key="tarefa.id" class="mr-4">
        <card-vuetify :task="tarefa"></card-vuetify>
      </li>
    </ul>
    <router-link to="create">
      <button-add
        :color="'red'"
        :icon="'mdi-plus'"
        style="position: fixed; right: 10px; bottom: 15px"
      ></button-add>
    </router-link>
  </div>
</template>

<script>
import CardVuetify from "../components/CardVuetify.vue";
import ButtonAdd from "../components/ButtonAdd.vue";

import tasksApi from "../tasksApi.js";

export default {
  components: {
    CardVuetify,
    ButtonAdd,
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
  },
  created() {
    this.buscaTarefas();
  },
};
</script>
