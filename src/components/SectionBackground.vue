<template>
	<v-row
		class="vs_section mt-3"
		:class="{
			'px-1': $vuetify.breakpoint.smAndDown,
			'px-3': $vuetify.breakpoint.mdAndUp
		}"
	>
		<v-col
			cols="12"
			xs="12"
			sm="12"
			md="12"
			lg="12"
			xl="12"
			:class="{
				'mx-0': $vuetify.breakpoint.smAndDown,
				'px-0': $vuetify.breakpoint.smAndDown
			}"
		>
			<p class="vs_section_title mx-3">{{ title }}</p>
			<slot></slot>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	data: function() {
		return {};
	},
	props: {
		title: String
	},
	methods: {},
	computed: {}
})
export default class SectionBackground extends Vue {}
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

.vs_section_title {
	color: #1b237b;
	font-size: 1.9rem;
	font-weight: 300;
	font-family: 'Special Elite', sans-serif;
}
</style>
