<template>
	<div class="ZX-body">
		<div class="ZX-content">
			<div class="inform">
				<div class="ZX-card">
					<div class="ZX-tab-content">
						<ZXtop></ZXtop>
						<ZXbottom></ZXbottom>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ZXtop from "./ZXtop";
	import ZXbottom from "./ZXbottom"
	export default {
	  components:{
		  ZXtop,
		  ZXbottom
	       },
	   }
</script>

<style>
	@import url(../../assets/css/inform);
</style>
