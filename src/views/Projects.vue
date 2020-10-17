<template>
	<div class="vs_projects pb-5">
		<Header />
		<v-carousel :height="200" :show-arrows="false">
			<v-carousel-item
				v-for="(item, i) in items"
				:key="i"
				:src="item.src"
				reverse-transition="fade-transition"
				transition="fade-transition"
			></v-carousel-item>
		</v-carousel>
		<v-container>
			<v-timeline>
				<v-timeline-item small>timeline item</v-timeline-item>
				<v-timeline-item small class="text-right">
					timeline item
				</v-timeline-item>
				<v-timeline-item small>timeline item</v-timeline-item>
				<v-timeline-item small class="text-right">
					timeline item
				</v-timeline-item>
				<v-timeline-item small>timeline item</v-timeline-item>
			</v-timeline>
		</v-container>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
	components: {
		Header
	},
	data() {
		return {
			items: [
				{
					src: require('../assets/back2.jpg')
				},
				{
					src: require('../assets/back1.jpg')
				}
			]
		};
	},
	computed: {},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
.vs_projects {
	height: calc(100vh);
	width: 100%;
}
.vs_section1 {
}
.vs_section2 {
}
.vs_skill {
}
.vs_bio {
	font-size: 1.1rem;
	font-weight: 300 !important;
	color: black !important;
}
.title_section {
	color: #1b237b;
	font-size: 1.7rem;
	font-weight: 300;
	font-family: 'Special Elite', sans-serif;
}

.title_section_dark {
	color: #40333e;
	font-size: 2rem;
	font-weight: 300;
}
</style>
