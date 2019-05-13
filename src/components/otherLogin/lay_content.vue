<template>
    <div class="layui-body">
        <login/>
    </div>
</template>

<script>
import login from "./login";

export default {
    components:{
        login
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