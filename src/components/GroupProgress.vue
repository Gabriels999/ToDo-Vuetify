<template>
  <div>
    <v-progress-linear :color="color" v-model="knowledge" height="25">
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  props: ["color"],
  data: () => ({
    knowledge: 0,
  }),
};
</script>
