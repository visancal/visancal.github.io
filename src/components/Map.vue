<template>
	<canvas id="map" class="vs_map"></canvas>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Deck } from '@deck.gl/core';
import { MapView } from '@deck.gl/core';

import { IconLayer } from '@deck.gl/layers';
import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer, PathLayer } from '@deck.gl/layers';

@Component({
	data: function() {
		return {
			deck: null
		};
	},
	computed: {
		venuesData(): object[] {
			return this.$store.getters.venues;
		}
	},
	methods: {
		createMap(): void {
			const showBorder = false;

			const devicePixelRatio: number = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
			const INITIAL_VIEW_STATE = {
				latitude: 0,
				longitude: 0,
				zoom: 2
			};
			/*const venues = new GeoJsonLayer({
				visible: true,
				data: this.$store.getters.venues,
				stroked: true,
				filled: true,
				lineWidthMinPixels: 2,
				opacity: 0.4,
				getLineColor: () => [255, 100, 100],
				getFillColor: () => [200, 160, 0, 180]
			});*/

			const ICON_MAPPING = {
				marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
			};
			const venues = new IconLayer({
				id: 'icon-layer',
				data: this.$store.getters.venues,
				pickable: true,
				// iconAtlas and iconMapping are required
				// getIcon: return a string
				iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
				iconMapping: ICON_MAPPING,
				getIcon: (d: any) => 'marker',

				sizeScale: 15,
				getPosition: (d: any) => d.coordinates,
				getSize: (d: any) => 5,
				getColor: (d: any) => [Math.sqrt(d.exits), 140, 0]
			});
			const osmLayer = new TileLayer({
				// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
				data: [
					'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
					'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
					'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
				],

				// Since these OSM tiles support HTTP/2, we can make many concurrent requests
				// and we aren't limited by the browser to a certain number per domain.
				maxRequests: 20,

				pickable: false,
				onViewportLoad: null,
				autoHighlight: showBorder,
				highlightColor: [60, 60, 60, 40],
				// https://wiki.openstreetmap.org/wiki/Zoom_levels
				minZoom: 0,
				maxZoom: 19,
				tileSize: 512 / devicePixelRatio,

				renderSubLayers: (props: any) => {
					const {
						bbox: { west, south, east, north }
					} = props.tile;

					return [
						new BitmapLayer(props, {
							data: null,
							image: props.data,
							bounds: [west, south, east, north]
						}),
						showBorder &&
							new PathLayer({
								id: `${props.id}-border`,
								visible: props.visible,
								data: [
									[
										[west, north],
										[west, south],
										[east, south],
										[east, north],
										[west, north]
									]
								],
								getPath: (d: any) => d,
								getColor: [255, 0, 0],
								widthMinPixels: 4
							})
					];
				}
			});

			(this as any).deck = new Deck({
				canvas: 'map',
				views: [new MapView({ id: 'osm', repeat: true, height: '80%' })],
				initialViewState: INITIAL_VIEW_STATE,
				controller: true,
				layers: [osmLayer, venues]
			});
		},
		deckInit: function() {
			(this as any).createMap();
		},
		deckDestroy() {
			(this as any).deck.finalize();
		}
	},
	mounted() {
		(this as any).deckInit();
	},
	beforeDestroy() {
		(this as any).deckDestroy();
	}
})
export default class Logo extends Vue {}
</script>

<style lang="postcss" scoped>
#map {
	width: 100%;
	height: 600px;
	position: absolute;
	top: 0px;
}
</style>
