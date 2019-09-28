<template>
  <v-flex xs12 class="vs_top mt-3 mb-2">
    <v-layout row wrap class="mx-3">
      <v-flex xs4 sm3 md2 lg1 class="vs_avatar">
        <img src="https://pbs.twimg.com/profile_images/917405606872584192/2ODysIaf_400x400.jpg" alt />
      </v-flex>
      <v-flex xs8 sm9 md10 lg11 class="vs_name_subtitle">
        <v-layout column>
          <v-flex xs12 class="vs_name">{{$t('name')}}</v-flex>
          <v-flex xs12 class="vs_subtitle">{{$t('subtitle')}}</v-flex>
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


<style lang="postcss" scoped>
.vs_top {
  & .vs_avatar {
    & img {
      width: 5rem;
      height: 5rem;
      border-radius: 50px;
    }
  }
  & .vs_name_subtitle {
    & .vs_name {
      font-size: 1.7rem;
    }
    & .vs_subtitle {
      font-size: 1.1rem;
      color: grey;
    }
  }
}
</style>
