<template>
    <div class="lay-ui-md3 layui-side layui-side-menu">
        <div class="left_col scroll_view">
            <div class="navbar nav_title">
                <a href="index.html" class="site_title">
                    <span>layuiCms Pro</span>
                </a>
            </div>
            <div class="clearfix"></div>
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section active">
                    <ul class="nav side-menu">
                        <li>
                            <a>
                                <i class="layui-icon layui-icon-home"></i>
                                    主页
                                <span class="fa fa-chevron-down"></span>
                            </a>
                            <ul class="nav child_menu">
                                <li class="current-page">
                                    <router-link to="/">控制台</router-link>
                                </li>
                                
                            </ul>
                        </li>
                        <li>
                            <a>
                                <i class="layui-icon layui-icon-component"></i>
                                    组件 
                                <span class="fa fa-chevron-down"></span>
                            </a>
                            <ul class="nav child_menu">
                                <li>
                                    <router-link to="/icon">图标</router-link>
                                </li>
                                <li>
                                    <router-link to="/selector">选择器</router-link>
                                </li>
                                <li>
                                    <router-link to="/city">城市选择三级联动</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                <i class="layui-icon layui-icon-template"></i>
                                    组织架构 
                                <span class="fa fa-chevron-down"></span>
                            </a>
                            <ul class="nav child_menu">
                                <li>
                                    <router-link to="/orgin">部门管理</router-link>
                                </li>
                                <li>
                                    <router-link to="/renshi">人事管理</router-link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-app"></i>
                                        资讯系统 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="layuiZX">资讯管理</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/layuiZXone">评论管理</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/layuiZXtwo">专题管理</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/layuiZXthree">标签管理</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-picture-fine"></i>
                                        图片管理  
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="/photo">海报管理</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-form"></i>
                                    客户管理 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="/curter">我的客户</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-senior"></i>
                                    意见反馈 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <a href="javascript:;">评价管理</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-chart"></i>
                                    统计分析 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="/visitorNum">访问人数</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/salesVolume">销量统计</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-user"></i>
                                    个人中心 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="/personalInformation">个人信息</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/myMessage">我的消息</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <i class="layui-icon layui-icon-set"></i>
                                    其他 
                                    <span class="fa fa-chevron-down"></span>
                                </a>
                                <ul class="nav child_menu">
                                    <li>
                                        <router-link to="/otherRegister">注册</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/otherLogin">登录</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/otherDaily">日志管理</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/otherSystemSetup">系统设置</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar-footer hidden-small">
                    <a>
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a>
                    <a>
                        <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                    </a>
                    <a>
                        <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                    </a>
                    <a>
                        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
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