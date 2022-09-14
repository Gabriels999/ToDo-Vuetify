<template>
  <group-form @novoGrupo="criaGrupo($event)"></group-form>
</template>
<script>
import GroupForm from "@/components/GroupForm.vue";

import groupApi from "@/tasksApi.js";
export default {
  components: {
    GroupForm,
  },
  methods: {
    criaGrupo(event) {
      console.log(event);
      groupApi.createGroup(event, () => this.$router.push({ name: "home" }));
    },
  },
};
</script>
