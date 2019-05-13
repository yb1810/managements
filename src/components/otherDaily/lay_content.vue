<template>
    <div class="layui-body">
        <daily/>
    </div>
</template>

<script>
import daily from "./daily";

export default {
    components:{
        daily
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