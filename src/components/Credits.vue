<template>
	<div class="vs_credits">
		<div>{{ place }}</div>
		<div>
			<span
				><v-icon small color="#b21b57">
					mdi-camera
				</v-icon></span
			><span>
				<a :href="link">{{ name }}</a>
			</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	data: function() {
		return {};
	},
	props: {
		name: String,
		link: String,
		place: String
	}
})
export default class Credits extends Vue {}
</script>

<style lang="postcss" scoped>
.vs_credits {
	position: absolute;
	bottom: 15px;
	left: 15px;
	color: #1b237b;
	border-radius: 2px;
	background-color: rgba(255, 255, 255, 0.4);
	font-size: 0.7rem;
	font-weight: 300;
}
.vs_credits div {
	margin-left: 5px;
	margin-right: 5px;
}
.vs_credits span a {
	margin-left: 6px;
	color: #1b237b;
}
</style>
