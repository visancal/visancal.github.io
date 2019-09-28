<template>
  <v-layout column class="vs_resume">
    <!-- TOP -->
    <resume-header />
    <!-- INFO -->
    <resume-info />
  </v-layout>
</template>

<script>
// @ is an alias to /src
import ResumeHeader from "@/components/ResumeHeader";
import ResumeInfo from "@/components/ResumeInfo";

export default {
  name: "resume",
  components: { ResumeHeader, ResumeInfo }
};
</script>


<style lang="postcss" scoped>
.vs_resume {
}
</style>
