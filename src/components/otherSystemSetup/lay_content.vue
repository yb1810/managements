<template>
    <div class="layui-body">
        <systemSetup/>
    </div>
</template>

<script>
import systemSetup from "./systemSetup";

export default {
    components:{
        systemSetup
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