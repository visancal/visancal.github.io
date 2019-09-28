<template>
  <v-layout column class="vs_skillbar mt-2 mb-3">
    <v-flex xs12>{{title}}</v-flex>
    <v-flex xs12>
      <v-progress-linear :value="value" background-opacity="0.3" :color="color" rounded></v-progress-linear>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "skillbar",
  data: () => ({}),
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true,
      default: 100
    },
    color: {
      type: String,
      required: false,
      default: "indigo"
    }
  }
};
</script>

<style lang="postcss" scoped>
.vs_skillbar {
}
</style>;
