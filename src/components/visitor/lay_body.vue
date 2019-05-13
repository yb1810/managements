<template>
  <div class="LAY_app">
      <navMenu/>
			<menu_left/>
      <lay_content/>
  </div>
</template>

<script>
import navMenu from "../layuiCms/navMenu";
import menu_left from "../layuiCms/menu_left";
import lay_content from "./lay_content";
export default {
  components:{
         navMenu,
				 menu_left,
				 lay_content
       }
}
</script>

<style>

</style>