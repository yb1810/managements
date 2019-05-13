<template>
    <div class="layui-body">
        <myMessage/>
    </div>
</template>

<script>
import myMessage from "./myMessage";

export default {
    components:{
        myMessage
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