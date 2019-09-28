<template>
  <v-content class="vs_container">
    <v-container>
      <router-view />
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "container",
  data: () => ({})
};
</script>

<style lang="postcss" scoped>
.vs_container {
}
</style>;

