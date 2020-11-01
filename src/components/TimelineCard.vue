<template>
	<v-card class="elevation-1 px-3">
		<v-card-text>
			<v-row class="vs_project_title mb-3">{{ project.title }} </v-row>
			<v-row class="mt-2 vs_project_description"> {{ project.description }} </v-row>
			<v-row class="mt-2 vs_project_url mb-2 mr-1">
				<a target="_blank" :href="project.url" class="vs_project_url">{{ project.url }}</a>
			</v-row>
			<v-row v-if="isMobile">
				<v-chip small chip label class="white--text mt-1" color="#1b237b"
					><v-icon small left class="white--text"> mdi-calendar-month </v-icon>{{ project.date }}</v-chip
				>
				<v-chip small chip label class="white--text ml-1 mt-1" :color="isPersonal(project.company)">{{ project.company }}</v-chip>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	data: function() {
		return {};
	},
	props: {
		project: Object
	},
	methods: {
		isPersonal(type: string): string {
			return type === 'Personal' ? '#0277BD' : '#b21b57';
		}
	},
	computed: {
		isMobile() {
			return window.innerWidth < 600 ? true : false;
		}
	}
})
export default class TimelineCard extends Vue {}
</script>

<style lang="postcss" scoped>
.vs_project_title {
	font-weight: 300 !important;
	font-size: 1.7rem !important;
	color: #1b237b;
	line-height: 2rem;
}
.vs_project_url {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
