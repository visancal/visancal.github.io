<template>
	<v-col class="text-center" cols="12" xs="12" sm="12" md="6" lg="6" xl="4">
		<v-card class="elevation-1">
			<v-img eager :src="info.img" height="100px" aspect-ratio="1.5" class="mt-3"></v-img>
			<v-card-title class="card_title">{{ info.title }}</v-card-title>

			<v-card-subtitle class="text-left center_title">
				<div>
					<a rel="noopener noreferrer" :href="info.url" target="_blank">{{ info.center }}</a>
				</div>
			</v-card-subtitle>

			<v-card-text class="text-left"
				><v-chip small chip label class="white--text" color="#1b237b"
					><v-icon small left class="white--text"> mdi-calendar-month </v-icon>{{ info.date }}</v-chip
				></v-card-text
			>
			<v-card-text class="text-left">
				<ul>
					<li v-for="(task, index) in info.tasks" :key="index" class="body-1">{{ task }}</li>
				</ul>
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
export default class EmploymentCard extends Vue {}
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
