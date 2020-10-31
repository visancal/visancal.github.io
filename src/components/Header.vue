<template>
	<div class="vs-header">
		<v-app-bar flat color="rgba(255,255,255,0.2)" height="100">
			<v-row class="vs_title ml-5 pl-4 vs_header_title" @click="goHome">Vicent Sanjaime</v-row>
			<v-spacer></v-spacer>
			<v-row justify="end">
				<v-btn
					aria-label="Home"
					color="light-blue darken-4"
					text
					class="mr-2 elevation-0 vs_header_btn"
					@click="goHome"
					:outlined="selectedTab === 'home'"
					:small="isMobile"
				>
					<!--<v-icon left class="mr-2">mdi-home-circle</v-icon>-->
					Home
				</v-btn>
				<v-btn
					aria-label="Professional background"
					color="light-blue darken-4"
					text
					class="mr-2 elevation-0 vs_header_btn"
					@click="goBackground"
					:outlined="selectedTab === 'background'"
					:small="isMobile"
				>
					<!--<v-icon left class="mr-2">
						mdi-book-open-page-variant
					</v-icon>-->
					Background
				</v-btn>
				<v-btn
					aria-label="Projects"
					color="light-blue darken-4"
					text
					class="mr-2 elevation-0 vs_header_btn"
					@click="goProjects"
					:outlined="selectedTab === 'projects'"
					:small="isMobile"
				>
					<!--<v-icon left class="mr-2">
						mdi-rocket-launch
					</v-icon>-->
					Projects
				</v-btn>
				<!--<v-btn aria-label="Trips" color="light-blue darken-4" text class="mr-2 elevation-0 vs_header_btn" @click="goTrips" :outlined="selectedTab === 'trips'" :small="isMobile">
					Trips
				</v-btn>-->
			</v-row>
		</v-app-bar>
		<v-app-bar dense flat color="rgba(255,255,255,0.2)" v-show="isHome">
			<v-spacer></v-spacer>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goTwitter" aria-label="Twitter">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goInstagram" aria-label="Instagram">
				<v-icon>
					mdi-instagram
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goLinkedin" aria-label="Linkedin">
				<v-icon>
					mdi-linkedin
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goGithub" aria-label="Github">
				<v-icon>
					mdi-github
				</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	computed: {
		selectedTab(): string {
			return this.$store.getters.currentTab;
		},
		isHome(): boolean {
			return this.$store.getters.currentTab === 'home';
		},
		isMobile() {
			return window.innerWidth < 600 ? true : false;
		}
	},
	methods: {
		goHome(): void {
			this.$store.commit('changeCurrentTab', 'home');
			this.$router.push({ path: '/' });
		},
		goBackground(): void {
			this.$store.commit('changeCurrentTab', 'background');
			this.$router.push({ path: 'background' });
		},
		goProjects(): void {
			this.$store.commit('changeCurrentTab', 'projects');
			this.$router.push({ path: 'projects' });
		},
		goTrips(): void {
			this.$store.commit('changeCurrentTab', 'trips');
			this.$router.push({ path: 'trips' });
		},
		goTwitter(): void {
			window.open('https://twitter.com/visancal');
		},
		goInstagram(): void {
			window.open('https://www.instagram.com/visancal/');
		},
		goLinkedin(): void {
			window.open('https://www.linkedin.com/in/vsanjaime/');
		},
		goGithub(): void {
			window.open('https://github.com/visancal');
		}
	},
	components: {}
})
export default class Header extends Vue {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
.vs_header_title {
	cursor: pointer;
}
.vs_header_btn {
	text-transform: capitalize !important;
	font-weight: 500;
}
.vs_title {
	font-family: 'Special Elite', sans-serif;
	font-weight: 400;
	font-size: 2.1rem;
	animation: color-change 15s infinite;
}
@keyframes color-change {
	0% {
		color: #1b237b;
	}
	50% {
		color: #b21b57;
	}
	100% {
		color: #1b237b;
	}
}
@media (max-width: 600px) {
	.vs_title {
		font-size: 1.5rem;
	}
}
</style>
