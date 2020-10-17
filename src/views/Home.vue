<template>
	<div class="vs_home">
		<v-carousel :height="imgHeight" :show-arrows="false">
			<v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
				<Header />
				<v-container>
					<v-row>
						<v-col class="col-xs-11 col-sm-9 col-md-8 col-lg-7 col-xl-6">
							<v-card class="elevation-0 ma-5 pa-5" color="transparent">
								<v-card-title class="vs_hello ma-5 ">Hey, I'm Vicent</v-card-title>
								<v-card-text class="vs_description ma-5 ">GIS developer & travel lover based in Valencia, Spain </v-card-text>
								<v-card-actions class="vs_description ma-5 pl-5">
									<v-btn large color="rgba(255,255,255,0.8)" class="mr-5 elevation-0 vs_btn_more" @click="goBackground">
										Learn more
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
						<v-col class="col-xs-1 col-sm-3 col-md-4 col-lg-5 col-xl-6"></v-col>
					</v-row>
				</v-container>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
	components: {
		Header
	},
	data() {
		return {
			items: [
				{
					src: require('../assets/intro.jpg')
				},
				{
					src: require('../assets/intro3.jpg')
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
.vs_home {
}
.vs_hello {
	font-family: 'Special Elite', sans-serif;
	font-size: 3rem;
	color: #1b237b;
}
.vs_description {
	font-size: 1.8rem;
	color: #005798 !important;
	font-weight: 300;
}
.vs_btn_more {
	color: #b21b57 !important;
	text-transform: capitalize !important;
	font-weight: 300;
}
</style>
