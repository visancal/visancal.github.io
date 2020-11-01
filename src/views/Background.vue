<template>
	<div class="vs_background pb-5">
		<section>
			<Header />
			<BannerImages :images="images" :interval="10000" />
		</section>
		<section class="vs_bio_info" :class="{ vs_bio_info_mobile: isMobile }">
			<v-container>
				<!-- BIO -->
				<SectionBackground title="Bio">
					<div class="vs_bio mx-5">
						Developer of geospatial applications, <a href="https://en.wikipedia.org/wiki/Geographic_information_system">GIS</a> consultant
						and technical product manager of <a href="https://www.prodevelop.es/puertos/posidonia/posidonia-space">Posidonia SPACE</a> and
						<a href="https://www.prodevelop.es/global/geo/local-space">Local SPACE</a> at
						<a href="https://www.prodevelop.es/en/">Prodevelop</a>. I love the front-end development, I usually work with
						<a href="https://vuejs.org/">Vue</a> and web mapping libraries such as <a ref="https://openlayers.org/">OpenLayers</a>,
						<a ref="https://leafletjs.com/">Leaflet</a>,
						<a ref="https://developers.google.com/maps/documentation/javascript/overview">Google Maps API</a>,
						<a ref="https://deck.gl">Deck.gl</a>, <a ref="https://carto.com/">CARTO</a>... I also have a extensive experience with the
						installation and management of server components as spatial databases and map servers. I have worked in a big amount of GIS
						projects, always integrating different technologies and components, the majority of them have been
						<a href="https://en.wikipedia.org/wiki/Open-source_model">Open-source</a>.
					</div>
					<div class="vs_bio mx-5 mt-3">
						I enjoy working on projects with a high spatial component because I can use my background related with cartography, geography
						and geodesy, applied to development of spatial solutions. I consider myself an adaptable, helpful and approachable team
						player. I also have a keen interest in new technologies.
					</div>
					<div class="vs_bio mt-4 mx-5">
						<p>Among my technical skill set I would highlight:</p>
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
					</div>
				</SectionBackground>

				<!-- EDUCATION -->
				<SectionBackground title="Education">
					<v-row
						:class="{
							'mx-0 ': $vuetify.breakpoint.smAndDown,
							'mx-2 ': $vuetify.breakpoint.mdAndUp
						}"
					>
						<EducationCard v-for="info in educationInfo" :key="info.id" :info="info" />
					</v-row>
				</SectionBackground>

				<!-- EMPLOYMENT -->
				<SectionBackground title="Employment history">
					<v-row
						:class="{
							'mx-0 ': $vuetify.breakpoint.smAndDown,
							'mx-2 ': $vuetify.breakpoint.mdAndUp
						}"
					>
						<EmploymentCard v-for="info in employmentInfo" :key="info.id" :info="info" />
					</v-row>
				</SectionBackground>

				<!-- LANGUAGES -->
				<SectionBackground title="Languages">
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
				</SectionBackground>
			</v-container>
		</section>
		<Footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionBackground from '@/components/SectionBackground.vue';
import EducationCard from '@/components/EducationCard.vue';
import EmploymentCard from '@/components/EmploymentCard.vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src
import BannerImages from '@/components/BannerImages.vue'; // @ is an alias to /src

BannerImages;

@Component({
	components: {
		EducationCard,
		EmploymentCard,
		Header,
		Footer,
		SectionBackground,
		BannerImages
	},
	data() {
		return {
			images: [
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
