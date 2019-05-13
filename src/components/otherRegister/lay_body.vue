<template>
  <div class="LAY_app">
      <navMenu/>
      <menuLeft/>
      <layContent/>
  </div>
</template>

<script>
import navMenu from "../layuiCms/navMenu";
import menuLeft from "../layuiCms/menu_left";
import layContent from "./lay_content";
export default {
  components:{
         navMenu,
         menuLeft,
         layContent
       }
}
</script>

<style>

</style>