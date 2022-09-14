<template>
  <summary-card :groups="groups" />
</template>

<script>
import SummaryCard from "@/components/SummaryCard.vue";

import groupApi from "@/tasksApi.js";

export default {
  components: {
    SummaryCard,
  },
  data() {
    return {
      groups: [],
    };
  },
  created() {
    groupApi.getGroups((data) => (this.groups = data));
  },
};
</script>
