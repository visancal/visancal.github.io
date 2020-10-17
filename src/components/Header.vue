<template>
	<div class="vs-header">
		<v-app-bar flat color="rgba(255,255,255,0.2)" height="100">
			<v-row class="vs_title ml-5 pl-4">Vicent Sanjaime</v-row>
			<v-spacer></v-spacer>
			<v-row justify="end">
				<v-btn color="light-blue darken-4" text class="mr-2 elevation-0 vs_header_btn" @click="goHome" :outlined="selectedTab === 'home'">
					<!--<v-icon left class="mr-2">mdi-home-circle</v-icon>-->
					Home
				</v-btn>
				<v-btn
					color="light-blue darken-4"
					text
					class="mr-2 elevation-0 vs_header_btn"
					@click="goBackground"
					:outlined="selectedTab === 'background'"
				>
					<!--<v-icon left class="mr-2">
						mdi-book-open-page-variant
					</v-icon>-->
					Background
				</v-btn>
				<v-btn
					color="light-blue darken-4"
					text
					class="mr-2 elevation-0 vs_header_btn"
					@click="goProjects"
					:outlined="selectedTab === 'projects'"
				>
					<!--<v-icon left class="mr-2">
						mdi-rocket-launch
					</v-icon>-->
					Projects
				</v-btn>
				<v-btn color="light-blue darken-4" text class="mr-2 elevation-0 vs_header_btn" @click="goTrips" :outlined="selectedTab === 'trips'">
					<!--<v-icon left class="mr-2">
						mdi-rocket-launch
					</v-icon>-->
					Trips
				</v-btn>
			</v-row>
		</v-app-bar>
		<v-app-bar dense flat color="rgba(255,255,255,0.2)" v-show="isHome">
			<v-spacer></v-spacer>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goTwitter">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goInstagram">
				<v-icon>
					mdi-instagram
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goLinkedin">
				<v-icon>
					mdi-linkedin
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goGithub">
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
		selectedTab() {
			return this.$store.getters.currentTab;
		},
		isHome() {
			return this.selectedTab === 'home';
		}
	},
	methods: {
		goHome() {
			this.$store.commit('changeCurrentTab', 'home');
			this.$router.push({ path: '/' });
		},
		goBackground() {
			this.$store.commit('changeCurrentTab', 'background');
			this.$router.push({ path: 'background' });
		},
		goProjects() {
			this.$store.commit('changeCurrentTab', 'projects');
			this.$router.push({ path: 'projects' });
		},
		goTrips() {
			this.$store.commit('changeCurrentTab', 'trips');
			this.$router.push({ path: 'trips' });
		},
		goTwitter() {
			window.open('https://twitter.com/visancal');
		},
		goInstagram() {
			window.open('https://www.instagram.com/visancal/');
		},
		goLinkedin() {
			window.open('https://www.linkedin.com/in/vsanjaime/');
		},
		goGithub() {
			window.open('https://github.com/visancal');
		}
	},
	components: {}
})
export default class Header extends Vue {}
</script>

<style scoped>
.vs_header_btn {
	text-transform: capitalize !important;
	font-weight: 300;
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
</style>
