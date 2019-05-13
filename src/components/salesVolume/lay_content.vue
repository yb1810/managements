<template>
    <div class="layui-body">
        <salesVolume/>
    </div>
</template>

<script>
import salesVolume from "./salesVolume";

export default {
    components:{
        salesVolume
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