<template>
    <div class="layui-body">
        <inform/>
    </div>
</template>

<script>
// import layContentRight from "./lay_content_right";
import inform from "./inform";


export default {
    components:{
        inform
    }
}
</script>

<style>
.LAY_app .layui-body{
    left: 220px;
    top: 58px;
    height: auto;
}
</style>