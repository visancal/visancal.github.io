export default {
	data() {
		return {			
			topScroll: 0
		};
	},
	methods: {
		onScroll(e) {
			(this as any).topScroll = e.target.scrollTop;
		}
	},
	computed:{
		isOver(){
			return (this as any).topScroll < 5 ? false : true;
		}
	}
};
