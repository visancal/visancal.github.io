<template>
	<div class="vs_trips pb-5">
		<Header />
		<Map />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Map from '@/components/Map.vue';

@Component({
	components: {
		Header,
		Map
	},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
.vs_trips {
	height: 100vh;
	width: 100%;
}
</style>
