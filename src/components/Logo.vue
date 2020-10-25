<template>
	<v-img :src="require('../assets/logo.jpg')" class="logo elevation-5" :width="width" :height="height" @click="goHome"></v-img>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	data: function() {
		return {
			width: 110 as number,
			height: 110 as number
		};
	},
	methods: {
		goHome(): void {
			this.$store.commit('changeCurrentTab', 'home');
			this.$router.push({ path: '/' });
		}
	},
	computed: {},
	created() {
		window.addEventListener('resize', () => {
			(this as any).width = window.innerWidth < 700 ? 70 : 110;
			(this as any).height = window.innerWidth < 700 ? 70 : 110;
		});
	}
})
export default class Logo extends Vue {}
</script>

<style lang="postcss" scoped>
.logo {
	position: absolute;
	top: 18px;
	left: 50px;
	border-radius: 80px;
	z-index: 20;
}
.logo:hover {
	cursor: pointer;
}
</style>
