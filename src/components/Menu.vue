<template>
	<v-row justify="end">
		<!-- DESKTOP version -->
		<div v-if="!isMobile" class="pr-8">
			<v-btn
				aria-label="Home"
				color="light-blue darken-4"
				text
				class="mr-2 elevation-0 vs_menu_btn"
				@click="goHome"
				:outlined="selectedTab === 'home'"
			>
				Home
			</v-btn>
			<v-btn
				aria-label="Background"
				color="light-blue darken-4"
				text
				class="mr-2 elevation-0 vs_menu_btn"
				@click="goBackground"
				:outlined="selectedTab === 'background'"
			>
				Background
			</v-btn>
			<v-btn
				aria-label="Projects"
				color="light-blue darken-4"
				text
				class="mr-2 elevation-0 vs_menu_btn"
				@click="goProjects"
				:outlined="selectedTab === 'projects'"
			>
				Projects
			</v-btn>
		</div>
		<!-- MOBILE version -->
		<div v-else>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#1b237b"></v-app-bar-nav-icon>
			<v-navigation-drawer v-model="drawer" absolute class="vs_drawer">
				<v-list nav dense ripple>
					<v-subheader class="vs_header_drawer">Vicent Sanjaime</v-subheader>
					<v-list-item-group v-model="group" active-class="vs_active_drawer">
						<v-list-item>
							<v-list-item-title class="vs_item_drawer" @click="goHome">Home</v-list-item-title>
						</v-list-item>

						<v-list-item>
							<v-list-item-title class="vs_item_drawer" @click="goBackground">Background</v-list-item-title>
						</v-list-item>

						<v-list-item>
							<v-list-item-title class="vs_item_drawer" @click="goProjects">Projects</v-list-item-title>
						</v-list-item>

						<!--<v-list-item>
							<v-list-item-title class="vs_item_drawer">Trips</v-list-item-title>
						</v-list-item>-->
					</v-list-item-group>
				</v-list>
			</v-navigation-drawer>
		</div>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mobileUtils from '@/mixins/mobileUtils';

@Component({
	data: function() {
		return {
			drawer: false,
			group: 1
		};
	},
	mixins: [mobileUtils],
	props: {},
	methods: {
		goHome(): void {
			if (this.$router.currentRoute.name !== 'home') {
				this.$store.commit('changeCurrentTab', 'home');
				this.$router.push({ path: '/' });
			}
		},
		goBackground(): void {
			if (this.$router.currentRoute.name !== 'background') {
				this.$store.commit('changeCurrentTab', 'background');
				this.$router.push({ path: 'background' });
			}
		},
		goProjects(): void {
			if (this.$router.currentRoute.name !== 'projects') {
				this.$store.commit('changeCurrentTab', 'projects');
				this.$router.push({ path: 'projects' });
			}
		},
		goTrips(): void {
			if (this.$router.currentRoute.name !== 'trips') {
				this.$store.commit('changeCurrentTab', 'trips');
				this.$router.push({ path: 'trips' });
			}
		}
	},
	computed: {
		selectedTab(): string {
			return this.$store.getters.currentTab;
		},
		isHome(): boolean {
			return this.$store.getters.currentTab === 'home';
		}
	},
	created() {
		if (this.$router.currentRoute.name === 'background') {
			(this as any).group = 1;
		} else if (this.$router.currentRoute.name === 'projects') {
			(this as any).group = 2;
		} else {
			(this as any).group = 0;
		}
	},
	watch: {
		group() {
			(this as any).drawer = false;
		}
	}
})
export default class Menu extends Vue {}
</script>

<style lang="postcss" scoped>
.vs_menu_btn {
	text-transform: capitalize !important;
	font-weight: 500;
}
.vs_drawer {
	z-index: 20000;
	height: 100vh !important;
	max-height: 100vh !important;
}
.vs_header_drawer {
	margin-bottom: 40px;
	font-family: 'Special Elite', sans-serif;
	font-weight: 500;
	font-size: 2.1rem;
	color: white !important;
	font-size: 1.5rem !important;
	margin-top: 30px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 4px;
}
.vs_item_drawer {
	padding: 5px;
	padding-top: 15px !important;
	padding-bottom: 15px !important;
	padding-left: 20px;
	font-size: 1.2rem !important;
	font-weight: 300 !important;
	margin-top: 5px;
}
.vs_active_drawer {
	background-color: white !important;
}
</style>
