<template>
	<v-row class="vs_footer">
		<v-container class="mt-0 pt-0">
			<v-row class="mt-0 pt-0">
				<v-col align-content="start" class="mt-0 pt-0 vs_footer_start"></v-col>
				<v-col align-content="center" class="mt-0 pt-0 text-center">
					<v-btn aria-label="Twitter" icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goTwitter">
						<v-icon>
							mdi-twitter
						</v-icon>
					</v-btn>
					<v-btn aria-label="Instagram" icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goInstagram">
						<v-icon>
							mdi-instagram
						</v-icon>
					</v-btn>
					<v-btn aria-label="Linkedin" icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goLinkedin">
						<v-icon>
							mdi-linkedin
						</v-icon>
					</v-btn>
					<v-btn aria-label="Github" icon x-small color="pink darken-3" class="mr-5 elevation-0" @click="goGithub">
						<v-icon>
							mdi-github
						</v-icon>
					</v-btn></v-col
				>
				<v-col justify="end" align-content="end" class="vs_footer_text text-right">
					Developed with <span class="vs_love">&hearts;</span> by Vicent</v-col
				>
			</v-row>
		</v-container>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	computed: {},
	methods: {
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
.vs_footer {
	background-color: #efefef;
	height: 30px;
}
.vs_footer_text {
	font-size: 0.8rem;
	color: #1b237b;
	padding-top: 2px;
}
.vs_love {
	color: #b21b57;
	padding: 0px 5px;
	font-size: 1rem;
	margin-top: -3px;
}
@media (max-width: 600px) {
	.vs_footer {
		display: none;
	}
	.vs_description {
		font-size: 1.2rem;
	}
}
</style>
