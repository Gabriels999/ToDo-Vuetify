<template>
  <edit-form :task="task" @editaTarefa="atualizaTarefa($event)" />
</template>

<script>
import EditForm from "@/components/EditTask.vue";

import tasksApi from "@/tasksApi.js";

export default {
  components: {
    EditForm,
  },
  data() {
    return {
      task: {},
      id: null,
    };
  },
  methods: {
    buscaTarefa(id) {
      tasksApi.getTask(id, (data) => {
        this.task = data;
      });
    },
    atualizaTarefa(event) {
      console.log(event, this.id);
      tasksApi.putTask(this.id, event, () => {
        this.$router.push("/");
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.buscaTarefa(this.id);
  },
};
</script>
