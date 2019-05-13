<template>
	<div class="ZX-tab-content">
		<ZX-ZXtop></ZX-ZXtop>
		<ZX-ZXbottom></ZX-ZXbottom>
		
	</div>
</template>

<script>
	import ZXtop from "./ZXtop.vue" //当前文件引入ZXtop
	import ZXbottom from "./ZXbottom.vue" //当前文件引入ZXbottom

	export default {
			components:{
				"ZX-ZXtop": ZXtop,
				"ZX-ZXbottom": ZXbottom,
				
			}
		}
</script>

<style>
</style>
