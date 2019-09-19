<template>
  <v-app id="app">
    <toolbar />
    <container />
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import Container from "@/components/Container";

export default {
  data: () => ({}),
  components: {
    Toolbar,
    Container
  }
};
</script>

<style >
html {
  overflow-y: hidden !important;
}
</style>
<style scoped>
</style>
