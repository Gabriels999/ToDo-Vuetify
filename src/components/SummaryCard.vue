<template>
  <v-card max-width="800" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            class="mb-6"
            v-for="group in groups"
            :key="group.id"
            color="indigo darken-3"
            dark
          >
            <v-card-title class="text-h5"> {{ group.nome }} </v-card-title>
            <group-progress />
            <v-card-actions>
              <v-btn text>Ver</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import GroupProgress from "@/components/GroupProgress.vue";
export default {
  props: ["groups"],
  components: {
    GroupProgress,
  },
  data: () => ({}),
  methods: {},
};
</script>
s
