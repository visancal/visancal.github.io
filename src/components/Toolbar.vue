<template>
  <v-app-bar app color="indigo" dark flat dense class="vs_toolbar">
    <v-toolbar-title class="ml-4 vs_title">Vicent Sanjaime</v-toolbar-title>
    <div class="flex-grow-1"></div>

    <v-btn text small class="mx-2" @click="goHome">{{$t('home')}}</v-btn>
    <v-btn text small class="mx-2" @click="goResume">{{$t('resume')}}</v-btn>
    <div class="flex-grow-1"></div>
    <v-btn icon @click="goTwitter" title="{{$t('twitter')}}">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon @click="goLinkedin">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon @click="goInstagram">
      <v-icon>mdi-instagram</v-icon>
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
    },
    openInNewTab(url) {
      window.open(url, "_blank").focus();
    },
    goTwitter() {
      this.openInNewTab("https://twitter.com/visancal");
    },
    goLinkedin() {
      this.openInNewTab("https://www.linkedin.com/in/vsanjaime/");
    },
    goInstagram() {
      this.openInNewTab("https://www.instagram.com/visancal/?hl=es");
    }
  },
  computed: {
    twitterTitle() {
      return this.$t("twitter");
    },
    linkedinTitle() {
      return this.$t("linkedin");
    },
    instagramTitle() {
      return this.$t("instagram");
    }
  }
};
</script>

<style scoped>
.vs_toolbar {
}
.vs_title {
  font-size: 1.5rem;
  font-weight: 800;
}
</style>

