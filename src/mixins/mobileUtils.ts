export default {
	
	computed:{
		isMobile(){
			return window.innerWidth < 600 ? true : false;
		}
	}
};