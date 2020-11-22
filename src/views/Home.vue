<template>
	<div class="vs_home">
		<v-carousel cycle continuous :interval="15000" hide-delimiters :height="imgHeight" :show-arrows="false">
			<v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
				<v-container class="vs_margintopheader pr-3">
					<v-row>
						<v-col class="col-xs-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
							<v-card
								class="elevation-0"
								:class="{
									'mx-0': $vuetify.breakpoint.smAndDown,
									'ma-5': $vuetify.breakpoint.mdAndUp,
									'mt-0': $vuetify.breakpoint.smAndDown,
									'pa-5': $vuetify.breakpoint.mdAndUp
								}"
								color="transparent"
							>
								<v-card-title
									class="vs_hello  mb-3"
									:class="{
										'mx-0': $vuetify.breakpoint.smAndDown,
										'mx-5': $vuetify.breakpoint.mdAndUp,
										'mt-0': $vuetify.breakpoint.smAndDown,
										'mt-4': $vuetify.breakpoint.mdAndUp
									}"
									>Hey, I'm Vicent</v-card-title
								>
								<v-card-text
									class="vs_description"
									:class="{
										'ma-0': $vuetify.breakpoint.smAndDown,
										'ma-5': $vuetify.breakpoint.mdAndUp
									}"
									>GIS developer & travel lover based in Valencia, Spain
								</v-card-text>
								<v-card-actions class="vs_description ma-5 pl-5">
									<v-btn
										large
										color="rgba(255,255,255,0.8)"
										class="mr-5 elevation-0 vs_btn_more"
										@click="goBackground"
										aria-label="Learn more"
									>
										Learn more
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
				<Credits :link="item.link" :name="item.credits" :place="item.place" />
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Credits from '@/components/Credits.vue';

@Component({
	components: {
		Credits
	},
	data() {
		return {
			items: [
				{
					src: require('../assets/home/intro.webp'),
					credits: '@xurxosanz',
					link: 'https://twitter.com/xurxosanz',
					place: 'Griffith Observatory, LA'
				},
				{
					src: require('../assets/home/intro2.webp'),
					credits: '@xurxosanz',
					link: 'https://twitter.com/xurxosanz',
					place: 'Badwater Basin, Death Valley, NE'
				}
			]
		};
	},
	computed: {
		imgHeight() {
			return Math.ceil(window.innerHeight);
		}
	},
	methods: {
		goBackground() {
			this.$store.commit('changeCurrentTab', 'background');
			this.$router.push({ path: 'background' });
		}
	},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
.vs_home {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100vh;
}
.vs_margintopheader {
	margin-top: 180px;
}
.vs_hello {
	font-family: 'Special Elite', sans-serif;
	font-size: 3.3rem;
	color: #1b237b;
	line-height: 3.5rem !important;
}
.vs_description {
	font-size: 1.8rem;
	color: #005798 !important;
	font-weight: 300;
	line-height: 2.3rem !important;
}
.vs_btn_more {
	color: #b21b57 !important;
	text-transform: capitalize !important;
	font-weight: 300;
	animation: btn-change 5s infinite;
}

@keyframes btn-change {
	0% {
		color: #1b237b !important;
	}
	50% {
		color: #b21b57 !important;
	}
	100% {
		color: #1b237b !important;
	}
}
@media (max-width: 600px) {
	.vs_hello {
		font-size: 1.6rem;
	}
	.vs_description {
		font-size: 1.2rem;
	}
	.vs_margintopheader {
		margin-top: 170px;
	}
}
</style>
