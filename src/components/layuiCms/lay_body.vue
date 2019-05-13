<template>
  <div class="LAY_app">
      <navMenu/>
      <menuLeft/>
      <layContent/>
  </div>
</template>

<script>
import navMenu from "./navMenu";
import menuLeft from "./menu_left";
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