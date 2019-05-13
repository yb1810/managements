<template>
   <div class="Other-content">
            <div class="Other-register">
                <div class="register-user">
                    <div class="register-user-head">
                        <h2>layuiAdmin</h2>
                        <p>layui 官方出品的单页面后台管理模板系统</p>
                    </div>
                    <div class="register-user-body">
                        <div class="layui-form-item">
                            <label class="register-user-icon layui-icon layui-icon-cellphone" for="login-register-cellphone"></label>
                            <input type="text" name="cellphone" id="login-register-cellphone" lay-verify="phone" placeholder="手机" class="layui-input">
                        </div>
                        <div class="layui-form-item">
                            <div class="row">
                                <div class="col-md-7">
                                    <label class="register-user-icon layui-icon layui-icon-vercode" style="left: 16px;" for="register-user-vercode"></label>
                                    <input type="text" name="vercode" id="register-user-vercode" lay-verify="required" placeholder="验证码" class="layui-input">
                                </div>
                                <div class="col-md-5">
                                    <div>
                                        <button type="button" class="register-btn-fluid" id="LAY-user-getsmscode">获取验证码</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="register-user-icon layui-icon layui-icon-password" for="register-user-password"></label>
                            <input type="password" name="password" id="register-user-password" lay-verify="required" placeholder="密码">
                        </div>
                        <div class="layui-form-item">
                            <label class="register-user-icon layui-icon layui-icon-password" for="register-user-repass"></label>
                            <input type="password" name="repass" id="register-user-repass" lay-verify="required" placeholder="确认密码" class="layui-input">
                        </div>
                        <div class="layui-form-item">
                            <label class="register-user-icon layui-icon layui-icon-username" for="register-user-nickname"></label>
                            <input type="text" name="nickname" id="register-user-nickname" lay-verify="nickname" placeholder="昵称" class="layui-input">
                        </div>
                        <div class="layui-form-item">
                            <div class="register-form-checkbox">
                                <input class="register-user-checkbox" style="left: 16px;" type="checkbox" name="remember" lay-skin="primary" title="记住密码">
                                <span>同意用户协议</span>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <button class="register-user-btn">注 册</button>
                        </div>
                        <div class="register-user-other">
                            <span>社交账号注册</span>
                            <a href="#"><i class="layui-icon layui-icon-login-qq"></i></a>
                            <a href="#"><i class="layui-icon layui-icon-login-wechat"></i></a>
                            <a href="#"><i class="layui-icon layui-icon-login-weibo"></i></a>
                            <a class="goLogin" href="#">用已有帐号登入</a>
                        </div>
                    </div>
                </div>
                <div class="register-user-foot">
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
