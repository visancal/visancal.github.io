<template>
  <v-flex xs12 class="vs_top mt-3 mb-2">
    <v-layout row wrap>
      <v-flex xs2 md1 class="vs_avatar">
        <img src="https://pbs.twimg.com/profile_images/917405606872584192/2ODysIaf_400x400.jpg" alt />
      </v-flex>
      <v-flex xs10 md11 class="vs_name_subtitle">
        <v-layout column>
          <v-flex xs2 class="vs_name">Vicent Sanjaime Calvet</v-flex>
          <v-flex xs2 class="vs_subtitle">Analista programador</v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
// @ is an alias to /src

export default {
  name: "resumeheader"
};
</script>


<style scoped>
.vs_avatar img {
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
}
.vs_name {
  font-size: 1.7rem;
}
.vs_subtitle {
  font-size: 1.1rem;
  color: grey;
}
</style>
