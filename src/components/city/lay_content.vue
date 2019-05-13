<template>
    <div class="layui-body">
        <layContentRight/>
    </div>
</template>

<script>
import layContentRight from "./citycontent";

export default {
    components:{
        layContentRight
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