<template>
	<div class="vs_projects pb-5">
		<section>
			<Header />
			<v-carousel cycle continuous hide-delimiters :height="carouselHeight" :show-arrows="false">
				<v-carousel-item
					v-for="(item, i) in items"
					:key="i"
					:src="item.src"
					reverse-transition="fade-transition"
					transition="fade-transition"
				></v-carousel-item>
			</v-carousel>
		</section>
		<section class="vs_timeline_info" :class="{ vs_timeline_info_mobile: isMobile }">
			<v-container
				:class="{
					'ma-0': $vuetify.breakpoint.smAndDown,
					'ma-2': $vuetify.breakpoint.mdAndUp
				}"
			>
				<v-row
					:class="{
						'ma-1': $vuetify.breakpoint.smAndDown,
						'ma-2': $vuetify.breakpoint.mdAndUp
					}"
				>
					<span class="vs_proj_title">Projects</span>
					<p>
						Since I started my professional career I have had the opportunity to work in a bunch of different GIS projects with differents
						technologies. On the timeline below shows the main projects in which I have participated and the technologies used. This list
						also includes some personal and R&D projects.
					</p>
				</v-row>
				<v-row justify="center">
					<v-timeline class="vs_timeline" :dense="isMobile">
						<v-timeline-item small v-for="(project, index) in projects" :key="index" color="#b21b57">
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
							<v-card class="elevation-1 px-4 mr-2" :class="{ vs_card_odd: isOdd(index), vs_card_even: !isOdd(index) }">
								<v-card-text>
									<v-row class="vs_project_title">{{ project.title }} </v-row>
									<v-row class="mt-2 vs_project_description"> {{ project.description }} </v-row>
									<v-row class="mt-2 vs_project_url">
										<a target="_blank" :href="project.url">{{ project.url }}</a>
									</v-row>
									<v-row v-if="isMobile">
										<v-chip small chip label class="white--text mt-1" color="#1b237b"
											><v-icon small left class="white--text"> mdi-calendar-month </v-icon>{{ project.date }}</v-chip
										>
										<v-chip small chip label class="white--text ml-1 mt-1" :color="isPersonal(project.company)">{{
											project.company
										}}</v-chip>
										<v-chip small chip label class="white--text ml-1 mt-1" color="#EF6C00" v-if="project.rd">R&D</v-chip>
									</v-row>
									<v-row class="mt-2 vs_project_technologies">
										<v-chip
											v-for="(tech, index2) in project.technologies"
											:key="index2"
											class="vs_tech ml-1 mt-1"
											small
											color="purple darken-1 white--text"
											label
											outlined
										>
											{{ tech }}</v-chip
										>
									</v-row>
								</v-card-text>
							</v-card>
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

@Component({
	components: {
		Header,
		Footer
	},
	data() {
		return {
			items: [
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
		},
		isMobile() {
			return window.innerWidth < 600 ? true : false;
		},
		carouselHeight() {
			return window.innerWidth < 600 ? 110 : 220;
		}
	},
	methods: {
		startEnd(index: number): string {
			return index % 2 === 1 ? 'start' : 'end';
		},
		isOdd(index: number): boolean {
			return index % 2 === 1 ? true : false;
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
.vs_project_title {
	font-weight: 300 !important;
	font-size: 1.7rem !important;
	color: #1b237b;
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
	max-height: calc(100vh - 220px - 100px - 30px) !important;
	overflow-y: auto;
}
.vs_timeline_info_mobile {
	max-height: calc(100vh - 100px - 110px) !important;
}
</style>
