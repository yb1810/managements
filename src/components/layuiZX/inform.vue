<template>
	<div class="ZX-body">
		<div class="ZX-content">
			<div class="inform">
				<div class="ZX-card">
					<div class="ZX-tab-content">
						<ZX-ZXcontent></ZX-ZXcontent>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ZXcontent from "./ZXcontent.vue" //当前文件引入ZXcontent
	export default {
			components:{
				"ZX-ZXcontent": ZXcontent,
			}
		}
</script>

<style>
@import url(../../assets/css/inform);
</style>
