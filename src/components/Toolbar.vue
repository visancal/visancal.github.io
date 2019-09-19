<template>
  <v-app-bar app color="indigo" dark flat dense class="vs_toolbar">
    <v-toolbar-title class="ml-4">Vicent Sanjaime</v-toolbar-title>
    <div class="flex-grow-1"></div>

    <v-btn text small class="mx-2" @click="goHome">Home</v-btn>
    <v-btn text small class="mx-2" @click="goResume">Resume</v-btn>
    <div class="flex-grow-1"></div>
    <v-btn icon>
      <a target="_blank" href="https://twitter.com/visancal"></a>
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon>
      <a target="_blank" href></a>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon>
      <a target="_blank" href="https://www.instagram.com/visancal/?hl=es">
        <v-icon>mdi-instagram</v-icon>
      </a>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "toolbar",
  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goResume() {
      this.$router.push("/resume");
    }
  }
};
</script>

<style scoped>
.vs_toolbar {
}
</style>;
