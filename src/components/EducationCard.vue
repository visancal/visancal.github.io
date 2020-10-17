<template>
	<v-col class="text-center col-xs-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
		<v-card class="elevation-0">
			<v-img eager :src="info.img" height="110px" aspect-ratio="1.0"></v-img>
			<v-card-title class="card_title">{{ info.title }}</v-card-title>

			<v-card-subtitle class="text-left card_subtitle">{{ info.subtitle }} </v-card-subtitle>
			<v-card-text class="text-left center_title">
				<div>
					<a :href="info.url" target="_blank">{{ info.center }}</a>
				</div>
				<div class="mt-1">
					<v-chip small chip label class="white--text" color="#1b237b"
						><v-icon small left class="white--text"> mdi-calendar-month </v-icon>{{ info.date }}</v-chip
					>
				</div>
			</v-card-text>
		</v-card>
	</v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	props: {
		info: {
			type: Object,
			required: true
		}
	}
})
export default class EducationCard extends Vue {}
</script>

<style scoped>
.card_title {
	color: #b21b57;
	font-weight: 400;
	font-size: 1.4rem;
}
.card_subtitle {
	color: #1b237b;
}
.center_title a {
	color: #1b237b;
	text-transform: uppercase;
	text-decoration: none;
}
.center_title a:visited,
.center_title a:hover {
	color: #b21b57;
}
</style>
