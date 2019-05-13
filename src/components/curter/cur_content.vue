<template>
     <div class="col-md-10 content">
            <div class="bigbox">
                <!-- photo_header -->
                <div class="photo_header">
                    <div class="message">
                        <div class="tabl">
                            <span>姓名</span>
                            <div class="table_box">
                                <div class="kuang">
                                    <input type="text" placeholder="请输入姓名">
                                </div>
                            </div>
                        </div>
                        <div class="tabl">
                            <span>加入时间</span>
                            <div class="table_box">
                                <div class="kuang">
                                    <input type="text" placeholder=" 请选择创建时间">
                                </div>
                            </div>
                        </div>
                        <div class="tabl">
                            <span>信用状况</span>
                            <div class="table_box">
                                <div class="kuang">
                                    <input class="selec" type="text" placeholder=" 请选择">
                                    <i class="layui-icon layui-icon-triangle-d"></i>     
                                </div>
                                <dl>
                                    <dd class="xuan">请选择</dd>
                                    <dd>无违约记录</dd>
                                    <dd>2个月内违约少于90天</dd>
                                    <dd>2个月内违约大于90天</dd>
                                    <dd>严重违约</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="tabl">
                            <span>选择地区</span>
                            <div class="table_box">
                                <div class="kuang">
                                    <input class="selec" type="text" placeholder=" 北京市">
                                    <i class="layui-icon layui-icon-triangle-d"></i>     
                                </div>
                                <dl>
                                    <dd class="xuan">请选择省</dd>
                                    <dd>北京市</dd>
                                    <dd>天津市</dd>
                                    <dd>河北省</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="tabl">
                            <div class="table_box">
                                <div class="kuang">
                                    <input class="selec" type="text" placeholder=" 请选择市">
                                    <i class="layui-icon layui-icon-triangle-d"></i>     
                                </div>
                                <dl>
                                    <dd class="xuan">请选择市</dd>
                                    <dd>北京市</dd>
                                    <dd>天津市</dd>
                                    <dd>石家庄市</dd>
                                    <dd>秦皇岛市</dd>
                                    <dd>唐山市</dd>
                                    <dd>张家口市</dd>
                                    <dd>廊坊市</dd>
                                    <dd>衡水市</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="tabl">
                            <div class="table_box">
                                <div class="kuang">
                                    <input class="selec" type="text" placeholder=" 请选择县">
                                    <i class="layui-icon layui-icon-triangle-d"></i>     
                                </div>
                                <dl>
                                    <dd class="xuan">请选择县</dd>
                                    <dd>长安区</dd>
                                    <dd>桥东区</dd>
                                    <dd>桥西区</dd>
                                    <dd>新华区</dd>
                                    <dd>井陉矿区</dd>
                                    <dd>裕华区</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="tabl">
                            <button>
                                <i class="layui-icon layui-icon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- photo_body -->
                <div class="photo_body">
                    <div class="butt">
                        <button>
                            <i class="layui-icon layui-icon-delete"></i>删除
                        </button>
                        <button>
                            <i class="layui-icon layui-icon-add-1"></i>添加
                        </button>
                        <button>
                            <i class="layui-icon"></i>导出
                        </button>
                    </div>
                    <div class="haibao">
                        <table cellspacing="0">
                            <tr class="first">
                                <th>
                                    <input type="checkbox" class="check" id="allCheck">
                                </th>
                                <th>姓名</th>
                                <th>电话</th>
                                <th>邮箱</th>
                                <th>性别</th>
                                <th>信用状况</th>
                                <th>地区</th>
                                <th>加入时间</th>
                                <th>贷款意向</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" class="check">
                                </td>
                                <td>魔小方</td>
                                <td>132****0082</td>
                                <td>邮箱</td>
                                <td>性别</td>
                                <td>良好</td>
                                <td>上海</td>
                                <td class="cells">2017-11-11</td>
                                <td class="yess">
                                    <input type="checkbox">
                                    <div>
                                        <em>有</em>
                                        <i></i>
                                    </div>
                                </td>
                                <td class="anniu">
                                    <button>查看</button>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </td>
                            </tr>
                        </table>
                        <div class="layui-table-page"><div id="layui-table-page6"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-30"><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0"><i class="layui-icon"></i></a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" data-page="2">2</a><a href="javascript:;" data-page="3">3</a><span class="layui-laypage-spr">…</span><a href="javascript:;" class="layui-laypage-last" title="尾页" data-page="6">6</a><a href="javascript:;" class="layui-laypage-next" data-page="2"><i class="layui-icon"></i></a><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span><span class="layui-laypage-count">共 60 条</span><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option><option value="60">60 条/页</option><option value="70">70 条/页</option><option value="80">80 条/页</option><option value="90">90 条/页</option></select></span></div></div></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
// import cur_content from "./cur_content";

export default {
    components:{
        mounted(){
         
        // $(".kuang i").toggle(
        //     function () {
        //         $(this).addClass("dong");
        //         $(this).parents().siblings("dl").addClass("yin");
        //     },
        //     function () {
        //         $(this).removeClass("dong");
        //         $(this).parents().siblings("dl").removeClass("yin");
        //     }
        // );
        
        $(".table_box dd").on("click",function(){
            $(this).parents().children().removeClass("change");
            $(this).addClass("change");
            $(this).parents("dl").removeClass("yin");
            $(this).parents().siblings(".kuang").children("i").removeClass("dong");
            $(this).parents().siblings(".kuang").children("input").value=$(this).innerHTML;
            console.log($(this).html());
        });
        // $(".yes div").toggle(
        //     function () {
        //         $(this).parents().addClass("noo");
        //         console.log($(this).children("em").html("无"));
        //     },
        //     function () {
        //         $(this).parents().removeClass("noo");
        //         console.log($(this).children("em").html("有"));
        //     }
        // );
        $("#allCheck").checkBind($(".check"));
        
        // $("#menu_toggle").toggle(
        //     function () {
        //         $(".content").css({'width':'93%','left':'90px'});
        //     },
        //     function () {
        //         $(".content").css({'width':'84%','left':'220px'});
        //     }
        // );
       }
    }
}
</script>

<style>
@import url(../../assets/css/curser);
</style>