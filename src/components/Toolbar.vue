<template>
  <v-app-bar app color="indigo" dark flat dense class="vs_toolbar">
    <v-toolbar-title class="ml-4 vs_title" @click="goHome">Vicent Sanjaime</v-toolbar-title>
    <div class="flex-grow-1"></div>

    <v-btn text small class="mx-2" @click="goHome" :outlined="btnHome">{{$t('home')}}</v-btn>
    <v-btn text small class="mx-2" @click="goResume" :outlined="btnResume">{{$t('resume')}}</v-btn>
    <v-btn text small class="mx-2" @click="goCourses" :outlined="btnCourses">{{$t('courses')}}</v-btn>
    <div class="flex-grow-1"></div>
    <v-btn icon @click="goTwitter" :title="twitterTitle">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon @click="goLinkedin" :title="linkedinTitle">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon @click="goInstagram" :title="instagramTitle">
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "toolbar",
  data: () => ({
    btnHome: true,
    btnResume: false,
    btnCourses: false
  }),
  methods: {
    goHome() {
      this.$router.push("/");
      this.btnHome = true;
      this.btnResume = false;
      this.btnCourses = false;
    },
    goResume() {
      this.$router.push("/resume");
      this.btnHome = false;
      this.btnResume = true;
      this.btnCourses = false;
    },
    goCourses() {
      this.$router.push("/courses");
      this.btnHome = false;
      this.btnResume = false;
      this.btnCourses = true;
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

<style lang="postcss" scoped>
.vs_toolbar {
  & .vs_title {
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
  }
}
</style>

