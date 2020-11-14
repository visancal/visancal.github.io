<template>
	<v-carousel
		cycle
		continuous
		hide-delimiters
		:height="carouselHeight"
		:show-arrows="false"
		class="vs_banner_images"
		:interval="interval"
		:class="{ vs_banner_images_over: over }"
	>
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
		interval: Number,
		over: Boolean
	},
	computed: {
		carouselHeight() {
			return window.innerWidth < 600 ? 90 : 180;
		}
	}
})
export default class BannerImages extends Vue {}
</script>

<style lang="postcss" scoped>
.vs_banner_images_over {
	-webkit-box-shadow: -2px 10px 5px -6px rgba(138, 134, 138, 1);
	-moz-box-shadow: -2px 10px 5px -6px rgba(138, 134, 138, 1);
	box-shadow: -2px 10px 5px -6px rgba(138, 134, 138, 1);
	z-index: 1000;
}
</style>
