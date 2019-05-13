<template>
    <div class="layui-body">
        <layContentRight/>
    </div>
</template>

<script>
import layContentRight from "./iconcontent";

export default {
    name:'layui-body',
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