<template>
	<v-app>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',

	data: () => ({
		//
	})
});
</script>
<style>
html {
	overflow-y: hidden;
	font-weight: 300;
}
body {
	font-family: 'Mate', Roboto, sans-serif;

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
	font-weight: 800;
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
.v-carousel__controls {
	display: none !important;
}
</style>
