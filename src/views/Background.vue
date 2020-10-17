<template>
	<div class="vs_background pb-5">
		<Header />
		<v-carousel :height="200" :show-arrows="false">
			<v-carousel-item
				v-for="(item, i) in items"
				:key="i"
				:src="item.src"
				reverse-transition="fade-transition"
				transition="fade-transition"
			></v-carousel-item>
		</v-carousel>
		<v-container>
			<v-row class="px-5 section1">
				<v-col class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<v-card class="elevation-0  mx-5 px-5">
						<v-card-title class="title_section"> Bio</v-card-title>
						<v-card-text class="vs_bio"
							>Full stack developer of geospatial applications,
							<a href="https://en.wikipedia.org/wiki/Geographic_information_system">GIS</a> consultant and technical product manager of
							<a href="https://www.prodevelop.es/puertos/posidonia/posidonia-space">Posidonia SPACE</a> and
							<a href="https://www.prodevelop.es/global/geo/local-space">Local SPACE</a> at
							<a href="https://www.prodevelop.es/en/">Prodevelop</a>. I love the front-end development with
							<a href="https://vuejs.org/">Vue.js</a> and anyone web mapping libraries: <a ref="https://openlayers.org/">OpenLayers</a>,
							<a ref="https://leafletjs.com/">Leaflet</a>,
							<a ref="https://developers.google.com/maps/documentation/javascript/overview">Google Maps API</a> or
							<a ref="https://carto.com/">CARTO</a>. Also I have a wide experience with the installation and management of server
							components as spatial databases and map servers.
						</v-card-text>
						<v-card-text class="vs_bio"
							><p>Among my skill set I would highlight:</p>
							<ul>
								<li>
									<v-chip class="ma-2 vs_skill" small color="pink darken-1  white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Front-end development</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="pink darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Javascript</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="pink darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										HTML5</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="pink darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										CSS</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="pink darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Vue</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										GIS Analysis</v-chip
									><v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Cartography</v-chip
									><v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Geomatics</v-chip
									><v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Geomatics</v-chip
									><v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										QGIS</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										gvSIG</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="indigo darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										ArcGis Desktop</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="purple darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Geoserver</v-chip
									><v-chip class="ma-2 vs_skill" small color="purple darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										MapServer</v-chip
									><v-chip class="ma-2 vs_skill" small color="purple darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										MapProxy</v-chip
									><v-chip class="ma-2 vs_skill" small color="purple darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Tilecache</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="teal darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										CAD</v-chip
									><v-chip class="ma-2 vs_skill" small color="teal darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										AutoCAD</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="green darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Oracle Spatial</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="green darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										PostgreSQL / PostGIS</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="green darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										SQL Server</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="green darken-1 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										SQL</v-chip
									>
								</li>

								<li>
									<v-chip class="ma-2 vs_skill" small color="orange darken-3 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										DevOps</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="orange darken-3 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Jenkins</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="orange darken-3 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Docker</v-chip
									><v-chip class="ma-2 vs_skill" small color="orange darken-3 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										AWS</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="orange darken-3 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Linux</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="lime darken-2 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Java</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="lime darken-2 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										GeoTools</v-chip
									>
									<v-chip class="ma-2 vs_skill" small color="lime darken-2 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Spring</v-chip
									>
								</li>
								<li>
									<v-chip class="ma-2 vs_skill" small color="red darken-2 white--text" label
										><v-icon small left>
											mdi-label
										</v-icon>
										Scrum</v-chip
									>
								</li>
							</ul>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="px-5 section1">
				<v-col class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pt-3">
					<v-card class="elevation-0 mt-5 mx-5 px-5">
						<v-card-title class="title_section"> Education</v-card-title>
						<v-card-text>
							<v-row class="mx-2">
								<EducationCard v-for="info in educationInfo" :key="info.id" :info="info" />
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="px-5 section2">
				<v-col class="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<v-card class="elevation-0 mt-5 mx-5 px-5">
						<v-card-title class="title_section"> Employment history </v-card-title>
						<v-card-text>
							<v-row class="mx-2">
								<EmploymentCard v-for="info in employmentInfo" :key="info.id" :info="info" />
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EducationCard from '@/components/EducationCard.vue';
import EmploymentCard from '@/components/EmploymentCard.vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
	components: {
		EducationCard,
		EmploymentCard,
		Header
	},
	data() {
		return {
			items: [
				{
					src: require('../assets/back2.jpg')
				},
				{
					src: require('../assets/back1.jpg')
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
		}
	},
	created() {
		this.$store.commit('changeCurrentTab', this.$route.name);
	}
})
export default class Home extends Vue {}
</script>

<style lang="css" scoped>
.vs_background {
	height: calc(100vh);
	width: 100%;
}
.vs_section1 {
}
.vs_section2 {
}
.vs_skill {
}
.vs_bio {
	font-size: 1.1rem;
	font-weight: 300 !important;
	color: black !important;
}
.title_section {
	color: #1b237b;
	font-size: 1.7rem;
	font-weight: 300;
	font-family: 'Special Elite', sans-serif;
}

.title_section_dark {
	color: #40333e;
	font-size: 2rem;
	font-weight: 300;
}
</style>
