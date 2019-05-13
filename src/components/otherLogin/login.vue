<template>
    <div class="Other-content">
            <div class="Other-login">
                <div class="login-user">
                    <div class="login-user-head">
                        <h2>layuiAdmin</h2>
                        <p>layui 官方出品的单页面后台管理模板系统</p>
                    </div>
                    <div class="login-user-body">
                        <div class="layui-form-item">
                            <label class="login-user-icon layui-icon layui-icon-username" for="login-user-username"></label>
                            <input type="text" name="username" id="login-user-username" lay-verify="required" placeholder="用户名">
                        </div>
                        <div class="layui-form-item">
                            <label class="login-user-icon layui-icon layui-icon-password" for="login-user-password"></label>
                            <input type="password" name="password" id="login-user-password" lay-verify="required" placeholder="密码">
                        </div>
                        <div class="layui-form-item">
                            <div class="row">
                                <div class="col-md-7">
                                    <label class="login-user-icon layui-icon layui-icon-vercode" style="left: 16px;" for="login-user-vercode"></label>
                                    <input type="text" name="vercode" id="login-user-vercode" lay-verify="required" placeholder="图形验证码">
                                </div>
                                <div class="col-md-5">
                                    <div>
                                        <img src="https://www.oschina.net/action/user/captcha" class="login-user-codeimg" id="login-user-vercode">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="login-form-checkbox">
                                <input class="login-user-checkbox" type="checkbox" name="remember" lay-skin="primary" title="记住密码">
                                <span>记住密码</span>
                            </div>
                            <a href="#" class="login-user-jump" style="margin-top: 2px;">忘记密码？</a>
                        </div>
                        <div class="layui-form-item">
                            <button class="login-user-btn">登 入</button>
                        </div>
                        <div class="login-user-other">
                            <span>社交账号注册</span>
                            <a href="#"><i class="layui-icon layui-icon-login-qq"></i></a>
                            <a href="#"><i class="layui-icon layui-icon-login-wechat"></i></a>
                            <a href="#"><i class="layui-icon layui-icon-login-weibo"></i></a>
                            <a class="goRegister" href="#">注册账号</a>
                        </div>
                    </div>
                </div>
                <div class="login-user-foot">
                    <p>© 2018 <a href="#" target="_blank">layui.com</a></p>
                    <p>
                        <span><a href="#" target="_blank">获取授权</a></span>
                        <span><a href="#" target="_blank">在线演示</a></span>
                        <span><a href="#" target="_blank">前往官网</a></span>
                    </p>
            </div>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
