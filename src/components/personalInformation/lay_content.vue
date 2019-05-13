<template>
    <div class="layui-body">
        <personalInformation/>
    </div>
</template>

<script>
import personalInformation from "./personalInformation";

export default {
    components:{
        personalInformation
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