<template>
  <task-form @novaTarefa="salvaTask($event)"></task-form>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";

import tasksApi from "@/tasksApi.js";

export default {
  components: {
    TaskForm,
  },
  data() {
    return {};
  },
  methods: {
    salvaTask(event) {
      tasksApi.postTask(event, () => this.$router.push("/"));
    },
  },
};
</script>
