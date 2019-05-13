<template>
    <div class="hide">
         <div id="layui-layer4" class="layui-layer layui-layer-page layui-anim layui-anim-rl layui-layer-adminRight" style="width: 300px;left: 100%;z-index:999">
            <div class="layui-layer-content">
                <div class="layui-card-body layadmin-setTheme">
                    <ul class="layadmin-setTheme-color">
                        <li class="layui-this" title="default">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #20222A;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li title="dark-blue">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #03152A;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li title="coffee">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #2E241B;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li title="purple-red">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #50314F;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li title="ocean">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #344058;">
                                <div class="layadmin-setTheme-logo" style="background-color: #1E9FFF;"></div>
                            </div>
                        </li>
                        <li title="green">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #3A3D49;">
                                <div class="layadmin-setTheme-logo" style="background-color: #2F9688;"></div>
                            </div>
                        </li>
                        <li title="red">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #20222A;">
                                <div class="layadmin-setTheme-logo" style="background-color: #F78400;"></div>
                            </div>
                        </li>
                        <li title="fashion-red">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #28333E;">
                                <div class="layadmin-setTheme-logo" style="background-color: #AA3130;"></div>
                            </div>
                        </li>
                        <li title="classic-black">
                            <div class="layadmin-setTheme-header"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #24262F;">
                                <div class="layadmin-setTheme-logo" style="background-color: #3A3D49;"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="layui-layer5" class="layui-layer layui-layer-page layui-layer-admin layadmin-note layui-anim layui-anim-upbit" style="z-index: 999; top: 58px; right:20px;display: none;">
            <div class="layui-layer-title" style="cursor: move">便签</div>
            <div class="layui-layer-content">
                <textarea>  便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录</textarea>
            </div>
            <i class="layui-icon" close>×</i>
        </div>
        <div id="layui-layer6" class="layui-layer layui-layer-page layui-anim layui-anim-rl layui-layer-adminRight" style="z-index: 999; width: 300px; top: 58px; left:100%;">
            <div class="layui-layer-content">
                <div class="layui-card-header">版本信息</div>
                <div class="layui-card-body layui-text layadmin-about">
                    <p>当前版本：layuiAdmin-v1.0.0-beta6</p>
                    <p>基于框架：layui-v2.2.6-rc2</p>
                    <div class="layui-btn-container">
                        <a href="javascript:;" class="layui-btn layui-btn-danger">获取授权</a>
                        <a href="javascript:;" class="layui-btn">下载新版</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
       
   }  
</script>


<style scoped>
    
</style>