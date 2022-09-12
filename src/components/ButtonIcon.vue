<template>
  <v-btn :color="color" fab large dark bottom left class="v-btn--example">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["color", "icon"],
  data: () => ({}),
};
</script>
