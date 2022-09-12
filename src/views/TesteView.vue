<template>
  <button-add :color="'red'" :icon="'mdi-plus'"></button-add>
</template>

<script>
import ButtonAdd from "../components/ButtonAdd.vue";
export default {
  components: {
    ButtonAdd,
  },
};
</script>
