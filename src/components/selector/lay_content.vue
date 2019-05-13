<template>
    <div class="layui-body">
        <laySelectorRight/>
    </div>
</template>

<script>
import laySelectorRight from "./selectorcente";

export default {
    components:{
        laySelectorRight
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