<template>
	<div class="vs_background pb-5">
		<section>
			<Header />
			<v-carousel cycle continuous :interval="10000" hide-delimiters :height="corouselHeight" :show-arrows="false">
				<v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" transition="fade-transition"></v-carousel-item>
			</v-carousel>
		</section>
		<section class="vs_bio_info" :class="{ vs_bio_info_mobile: isMobile }">
			<v-container>
				<!-- BIO -->
				<v-row
					class="section1"
					:class="{
						'px-1': $vuetify.breakpoint.smAndDown,
						'px-3': $vuetify.breakpoint.mdAndUp
					}"
				>
					<v-col
						class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						:class="{
							'mx-0': $vuetify.breakpoint.smAndDown,
							'px-0': $vuetify.breakpoint.smAndDown
						}"
					>
						<v-card
							class="elevation-0"
							:class="{
								'mx-0': $vuetify.breakpoint.smAndDown,
								'mx-5': $vuetify.breakpoint.mdAndUp,
								'px-0': $vuetify.breakpoint.smAndDown,
								'px-5': $vuetify.breakpoint.mdAndUp
							}"
						>
							<v-card-title class="title_section"> Bio</v-card-title>
							<v-card-text class="vs_bio"
								>Developer of geospatial applications,
								<a href="https://en.wikipedia.org/wiki/Geographic_information_system">GIS</a> consultant and technical product manager
								of <a href="https://www.prodevelop.es/puertos/posidonia/posidonia-space">Posidonia SPACE</a> and
								<a href="https://www.prodevelop.es/global/geo/local-space">Local SPACE</a> at
								<a href="https://www.prodevelop.es/en/">Prodevelop</a>. I love the front-end development, I usually work with
								<a href="https://vuejs.org/">Vue</a> and web mapping libraries such as
								<a ref="https://openlayers.org/">OpenLayers</a>, <a ref="https://leafletjs.com/">Leaflet</a>,
								<a ref="https://developers.google.com/maps/documentation/javascript/overview">Google Maps API</a>,
								<a ref="https://deck.gl">Deck.gl</a>, <a ref="https://carto.com/">CARTO</a>... I also have a extensive experience with
								the installation and management of server components as spatial databases and map servers. I have worked in a big
								amount of GIS projects, always integrating different technologies and components, the majority of them have been
								<a href="https://en.wikipedia.org/wiki/Open-source_model">Open-source</a>.
							</v-card-text>
							<v-card-text class="vs_bio"
								>I enjoy working on projects with a high spatial component because I can use my background related with cartography,
								geography and geodesy, applied to development of spatial solutions. I consider myself an adaptable, helpful and
								approachable team player. I also have a keen interest in new technologies.
							</v-card-text>
							<v-card-text class="vs_bio"
								><p>Among my technical skill set I would highlight:</p>
								<ul class="vs_list_skills">
									<li v-for="(groupSkills, index) in skills" :key="index">
										<v-chip
											v-for="(skill, index2) in groupSkills.techs"
											:key="index2"
											class="ma-2 vs_skill"
											small
											:color="`${groupSkills.color}  white--text`"
											label
											><v-icon small left>
												mdi-label
											</v-icon>
											{{ skill }}</v-chip
										>
									</li>
								</ul>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<!-- EDUCATION -->
				<v-row
					class="section2  pt-3"
					:class="{
						'px-1': $vuetify.breakpoint.smAndDown,
						'px-3': $vuetify.breakpoint.mdAndUp
					}"
				>
					<v-col
						class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						:class="{
							'mx-0': $vuetify.breakpoint.smAndDown,
							'px-0': $vuetify.breakpoint.smAndDown
						}"
					>
						<v-card
							class="elevation-0 mt-4"
							:class="{
								'mx-0': $vuetify.breakpoint.smAndDown,
								'mx-5': $vuetify.breakpoint.mdAndUp,
								'px-0': $vuetify.breakpoint.smAndDown,
								'px-5': $vuetify.breakpoint.mdAndUp
							}"
						>
							<v-card-title class="title_section"> Education</v-card-title>
							<v-card-text>
								<v-row
									:class="{
										'mx-0 ': $vuetify.breakpoint.smAndDown,
										'mx-2 ': $vuetify.breakpoint.mdAndUp
									}"
								>
									<EducationCard v-for="info in educationInfo" :key="info.id" :info="info" />
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<!-- EMPLOYMENT -->
				<v-row
					class="section3"
					:class="{
						'px-1': $vuetify.breakpoint.smAndDown,
						'px-3': $vuetify.breakpoint.mdAndUp
					}"
				>
					<v-col
						class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						:class="{
							'mx-0': $vuetify.breakpoint.smAndDown,
							'px-0': $vuetify.breakpoint.smAndDown
						}"
					>
						<v-card
							class="elevation-0 mt-5"
							:class="{
								'px-0': $vuetify.breakpoint.smAndDown,
								'px-3': $vuetify.breakpoint.mdAndUp
							}"
						>
							<v-card-title class="title_section"> Employment history </v-card-title>
							<v-card-text>
								<v-row
									:class="{
										'mx-0 ': $vuetify.breakpoint.smAndDown,
										'mx-2 ': $vuetify.breakpoint.mdAndUp
									}"
								>
									<EmploymentCard v-for="info in employmentInfo" :key="info.id" :info="info" />
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<!-- LANGUAGES -->
				<v-row class="section4">
					<v-col
						class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						:class="{
							'mx-0': $vuetify.breakpoint.smAndDown,
							'px-0': $vuetify.breakpoint.smAndDown
						}"
					>
						<v-card
							class="elevation-0 mt-5"
							:class="{
								'px-0': $vuetify.breakpoint.smAndDown,
								'px-3': $vuetify.breakpoint.mdAndUp
							}"
						>
							<v-card-title class="title_section"> Languages </v-card-title>
							<v-card-text>
								<v-row class="mx-5 mt-2 vs_progress_title">
									Spanish
								</v-row>
								<v-row class="mx-5 mt-2 vs_progress">
									<v-progress-linear rounded value="100" height="20" color="#b21b57" class="white--text">
										<template>
											Native
										</template>
									</v-progress-linear>
								</v-row>
								<v-row class="mx-5 mt-3 vs_progress_title">
									English
								</v-row>
								<v-row class="mx-5 mt-2 vs_progress">
									<v-progress-linear rounded value="70" height="20" color="#b21b57" class="white--text"
										><template>
											Upper-Intermediate
										</template></v-progress-linear
									>
								</v-row>
								<v-row class="mx-5 mt-3 vs_progress_title">
									Catalan
								</v-row>
								<v-row class="mx-5 mt-2 vs_progress">
									<v-progress-linear rounded value="100" height="20" color="#b21b57" class="white--text"
										><template>
											Native
										</template></v-progress-linear
									>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</section>
		<Footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EducationCard from '@/components/EducationCard.vue';
import EmploymentCard from '@/components/EmploymentCard.vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src

@Component({
	components: {
		EducationCard,
		EmploymentCard,
		Header,
		Footer
	},
	data() {
		return {
			items: [
				{
					src: require('../assets/back/back5.webp')
				},
				{
					src: require('../assets/back/back1.webp')
				},
				{
					src: require('../assets/back/back2.webp')
				}
			]
		};
	},
	computed: {
		educationInfo() {
			return this.$store.getters.educationInfo;
		},
		employmentInfo() {
			return this.$store.getters.employmentInfo;
		},
		skills() {
			return this.$store.getters.skills;
		},
		isMobile() {
			return window.innerWidth < 600 ? true : false;
		},
		corouselHeight() {
			return window.innerWidth < 600 ? 110 : 220;
		}
	},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
.vs_background {
	height: calc(100vh);
	width: 100%;
}
.vs_bio_info {
	max-height: calc(100vh - 220px - 100px - 30px) !important;
	overflow-y: auto;
}
.vs_bio_info_mobile {
	max-height: calc(100vh - 100px - 110px) !important;
}
.vs_list_skills li:before {
	content: '' !important;
}
.vs_bio {
	font-size: 1.1rem;
	font-weight: 300 !important;
	color: black !important;
}
.title_section {
	color: #1b237b;
	font-size: 1.9rem;
	font-weight: 300;
	font-family: 'Special Elite', sans-serif;
}
.vs_progress_title {
	font-size: 1.2rem;
	font-weight: 300;
	color: black;
}
.vs_progress {
	width: 30%;
}
@media (min-width: 700px) and (max-width: 1000px) {
	.vs_progress {
		width: 50%;
	}
}
@media (max-width: 700px) {
	.vs_progress {
		width: 80%;
	}
}
</style>
