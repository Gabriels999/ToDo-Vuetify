<template>
  <edit-form :task="task" />
</template>

<script>
import EditForm from "../components/EditTask.vue";

import tasksApi from "../tasksApi.js";

export default {
  components: {
    EditForm,
  },
  data() {
    return {
      task: {},
    };
  },
  methods: {
    buscaTarefa() {
      tasksApi.getTask(2, (data) => {
        this.task = data;
      });
    },
  },
  created() {
    this.buscaTarefa();
  },
};
</script>
