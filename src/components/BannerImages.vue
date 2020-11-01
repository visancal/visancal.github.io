<template>
	<v-carousel cycle continuous hide-delimiters :height="carouselHeight" :show-arrows="false" class="vs_banner_images" :interval="interval">
		<v-carousel-item
			v-for="(image, i) in images"
			:key="i"
			:src="image.src"
			reverse-transition="fade-transition"
			transition="fade-transition"
		></v-carousel-item>
	</v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	data: function() {
		return {};
	},
	props: {
		images: Array,
		interval: Number
	},
	computed: {
		carouselHeight() {
			return window.innerWidth < 600 ? 110 : 220;
		}
	}
})
export default class BannerImages extends Vue {}
</script>

<style lang="postcss" scoped>
.vs_banner_images {
}
</style>
