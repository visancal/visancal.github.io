<template>
  <div class="vs_home">
    <v-parallax :src="foto" :height="fotoHeight"></v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
import foto from "@/assets/foto.jpg";

export default {
  name: "home",
  data: () => ({
    foto: foto,
    fotoHeight: 500
  }),
  components: {},
  created() {
    this.fotoHeight = window.innerHeight - 100;
  }
};
</script>


<style scoped>
.vs_home {
}
</style>
