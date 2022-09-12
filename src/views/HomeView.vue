<template>
  <card-vuetify :task="tarefa"></card-vuetify>
</template>

<script>
import CardVuetify from "../components/CardVuetify.vue";
export default {
  components: {
    CardVuetify,
  },
  data() {
    return {
      tarefa: [],
    };
  },
};
</script>
