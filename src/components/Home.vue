<template>
  <div class="vs_home mt-5">
    <v-layout>
      <v-flex xs12 class="vs_photo">
        <img :src="photo" :height="photoHeight" />
        <v-layout
          align-center
          justify-center
          row
          fill-height
          class="vs_info pa-5"
          :style="{ width: infoWidth + 'px' }"
        >
          <v-flex xs12 class="vs_info_square pa-4">
            <h3>Eyy!! soy Vicent, bienvenido a mi web personal</h3>
            <br />
            <p>Bienvenido a mi web personal sgfddsgfdgfdgfd</p>
            <p>Bienvenidog tretgre rtyhg tryhtr adsfdsfg</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import photo from "@/assets/foto.jpg";

export default {
  name: "home",
  data: () => ({
    photoHeight: 500,
    infoWidth: 300,
    photo
  }),
  components: {},
  created() {
    this.photoHeight = window.innerHeight - 100;
    this.infoWidth = window.innerWidth / 3;
  }
};
</script>


<style lang="postcss" scoped>
.vs_home {
  & .vs_photo {
    position: relative;

    & img {
      object-fit: cover;
      width: 100%;
      filter: blur(4px);
    }
    & .vs_info {
      position: absolute;
      top: 8px;
      right: 16px;
      border-radius: 5px;

      & .vs_info_square {
        color: darkgrey;
      }
    }
  }
}
</style>
