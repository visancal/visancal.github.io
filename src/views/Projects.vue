<template>
	<div class="vs_projects pb-5">
		<section>
			<Header />
			<BannerImages :images="images" :interval="10000" :over="isOver" />
		</section>
		<section id="vs_timeline_info" class="vs_timeline_info" :class="{ vs_timeline_info_mobile: isMobile }">
			<v-container v-scroll:#vs_timeline_info="onScroll">
				<v-row
					:class="{
						'ma-1': $vuetify.breakpoint.smAndDown,
						'ma-2': $vuetify.breakpoint.mdAndUp
					}"
				>
					<span class="vs_proj_title">Projects</span>
					<p class="mx-2">
						Since I started my professional career I have had the opportunity to work in a bunch of different GIS projects with differents
						technologies. On the timeline below shows the main projects in which I have participated and the technologies used. This list
						also includes some personal and R&D projects.
					</p>
				</v-row>
				<v-row justify="center">
					<v-timeline class="vs_timeline" :dense="isMobile">
						<v-timeline-item small v-for="(project, index) in projects" :key="index" color="#b21b57" class="vs_timeline_item mx-2">
							<template v-slot:opposite>
								<v-row :justify="startEnd(index)">
									<v-chip small chip label class="white--text" color="#1b237b"
										><v-icon small left class="white--text"> mdi-calendar-month </v-icon>{{ project.date }}</v-chip
									>
								</v-row>
								<v-row :justify="startEnd(index)">
									<v-chip small chip label class="white--text mt-1" :color="isPersonal(project.company)">{{
										project.company
									}}</v-chip>
								</v-row>
								<v-row v-if="project.rd" :justify="startEnd(index)">
									<v-chip small chip label class="white--text mt-1" color="#EF6C00">R&D</v-chip>
								</v-row>
							</template>
							<TimelineCard :project="project" />
						</v-timeline-item>
					</v-timeline>
				</v-row>
			</v-container>
		</section>
		<Footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src
import BannerImages from '@/components/BannerImages.vue';
import TimelineCard from '@/components/TimelineCard.vue';

import imageOver from '@/mixins/imageOver';
import mobileUtils from '@/mixins/mobileUtils';

@Component({
	components: {
		Header,
		Footer,
		BannerImages,
		TimelineCard
	},
	mixins: [imageOver, mobileUtils],
	data() {
		return {
			images: [
				{
					src: require('../assets/back/back5.webp')
				},
				{
					src: require('../assets/back/back6.webp')
				}
			]
		};
	},
	computed: {
		projects() {
			return this.$store.getters.projects;
		}
	},
	methods: {
		startEnd(index: number): string {
			return index % 2 === 1 ? 'start' : 'end';
		},
		isPersonal(type: string): string {
			return type === 'Personal' ? '#0277BD' : '#b21b57';
		}
	},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
.vs_projects {
	height: calc(100vh);
	width: 100%;
}
.vs_proj_title {
	color: #1b237b;
	font-size: 1.9rem;
	font-weight: 300;
	font-family: 'Special Elite', sans-serif;
}

.vs_project_description {
	font-weight: 300 !important;
	font-size: 0.9rem !important;
}
.vs_project_technologies {
	font-weight: 300 !important;
	font-size: 1rem !important;
}
.vs_timeline {
	width: 100%;
}

.vs_timeline_info {
	max-height: calc(100vh - 180px - 100px - 30px) !important;
	overflow-y: auto;
	overflow-x: hidden;
}
.vs_timeline_info_mobile {
	max-height: calc(100vh - 100px - 90px) !important;
}
</style>
