<template>
	<div class="vs_header">
		<!-- Main top bar -->
		<v-app-bar flat color="rgba(255,255,255,0.2)" :height="height">
			<v-row class="vs_title ml-5 pl-1 pt-2" @click="goHome">Vicent Sanjaime</v-row>
			<v-spacer></v-spacer>
			<Menu />
		</v-app-bar>
		<!-- Secondary bar -->
		<v-app-bar dense flat color="rgba(255,255,255,0)" v-show="isHome">
			<v-spacer></v-spacer>
			<v-btn icon x-small color="pink darken-3" class="mr-4 elevation-0 " @click="goTwitter" aria-label="Twitter" v-show="!isDrawer">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-4 elevation-0 " @click="goInstagram" aria-label="Instagram" v-show="!isDrawer">
				<v-icon>
					mdi-instagram
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-4 elevation-0 " @click="goLinkedin" aria-label="Linkedin" v-show="!isDrawer">
				<v-icon>
					mdi-linkedin
				</v-icon>
			</v-btn>
			<v-btn icon x-small color="pink darken-3" class="mr-2 elevation-0 " @click="goGithub" aria-label="Github" v-show="!isDrawer">
				<v-icon>
					mdi-github
				</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mobileUtils from '@/mixins/mobileUtils';
import Menu from '@/components/Menu.vue';

@Component({
	mixins: [mobileUtils],
	components: {
		Menu
	},
	computed: {
		isHome(): boolean {
			return this.$store.getters.currentTab === 'home';
		},
		height(): object {
			return (this as any).isMobile ? this.$store.getters.headerHeight.mobile : this.$store.getters.headerHeight.desktop;
		},
		isDrawer(): boolean {
			return this.$store.getters.drawer;
		}
	},
	methods: {
		goHome(): void {
			this.$store.commit('changeCurrentTab', 'home');
			this.$router.push({ path: '/' });
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
	}
})
export default class Header extends Vue {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
.vs_header {
	z-index: 100 !important;
	position: relative;
}
.vs_title {
	font-family: 'Special Elite', sans-serif;
	font-weight: 500;
	font-size: 2.1rem;
	cursor: pointer;
	animation: color-change 15s infinite;
}
.vs_social_btn {
	margin-left: 15px !important;
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
