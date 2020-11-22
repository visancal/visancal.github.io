<template>
	<v-app>
		<v-main>
			<Header />
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src

export default Vue.extend({
	name: 'App',
	components: { Header },
	data: () => ({})
});
</script>
<style>
html {
	overflow-y: hidden !important;
	font-weight: 300;
}
body {
	font-family: Roboto, sans-serif;
	font-weight: 300 !important;
}
.v-btn.v-btn--outlined {
	border-radius: 0px !important;
	border-top-width: 0px !important;
	border-left-width: 0px !important;
	border-right-width: 0px !important;
	border-bottom-width: 1px !important ;
	border-bottom-color: #b21b57 !important;
	border-top-color: #b21b57 !important;
	color: #1b237b !important;
	font-weight: 900;
}
ul {
	list-style: none; /* Remove default bullets */
}
ul li::before {
	content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
	color: #d03c3b; /* Change the color */
	font-weight: bold; /* If you want it to be bold */
	display: inline-block; /* Needed to add space between the bullet and the text */
	width: 1.4em; /* Also needed for space (tweak if needed) */
	margin-left: -1.3em; /* Also needed for space (tweak if needed) */
}
.theme--light.v-timeline::before {
	background-color: hsla(336, 74%, 40%, 0.3) !important;
}
.v-list-item__title {
	color: white !important;
	font-size: 1.5rem;
}
.v-navigation-drawer__content {
	background-color: #1b237b !important;
}

.v-list-item--active {
	background-color: #1b237b !important;
	border: 1px solid white !important;
}

.v-list-item--active .v-list-item__title {
	color: #1b237b !important;
	font-weight: 500 !important;
}

.v-list-item--link:before {
	background-color: #1b237b !important;
}
</style>
