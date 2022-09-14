<template>
  <div>
    <group-form @novoGrupo="teste($event)"></group-form>
    <button-icon :color="'red'" :icon="'mdi-plus'"></button-icon>
  </div>
</template>

<script>
import ButtonIcon from "@/components/ButtonIcon.vue";
import GroupForm from "@/components/GroupForm.vue";
export default {
  components: {
    ButtonIcon,
    GroupForm,
  },
  methods: {
    teste(event) {
      console.log(event);
    },
  },
};
</script>
