<template>
    <div class="col-md-10 photo">
        <div class="bigbox">
            <!-- photo_header -->
            <div class="photo_header">
                <div class="message">
                    <div class="tabl">
                        <span>名称</span>
                        <div class="table_box">
                            <div class="kuang">
                                <input type="text" placeholder="请输入海报名称">
                            </div>
                        </div>
                    </div>
                    <div class="tabl">
                        <span>创建时间</span>
                        <div class="table_box">
                            <div class="kuang">
                                <input type="text" placeholder=" 请选择创建时间">
                            </div>
                        </div>
                    </div>
                    <div class="tabl">
                        <span>启用时间</span>
                        <div class="table_box">
                            <div class="kuang">   
                                <input type="text" placeholder=" 请选择启用时间">
                            </div>
                        </div>
                    </div>
                    <div class="tabl">
                        <span>平台</span>
                        <div class="table_box">
                            <div class="kuang">
                                <input class="selec" type="text" placeholder=" 请选择">
                                <i class="layui-icon layui-icon-triangle-d"></i>     
                            </div>
                            <dl>
                                <dd class="xuan">请选择</dd>
                                <dd>智汇魔方</dd>
                                <dd>汇贷客</dd>
                                <dd>公众号</dd>
                                <dd>web</dd>
                                <dd>pc</dd>
                                <dd>微信</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="tabl">
                        <span>类型</span>
                        <div class="table_box">
                            <div class="kuang">
                                <input class="selec" type="text" placeholder=" 请选择">
                                <i class="layui-icon layui-icon-triangle-d"></i>     
                            </div>
                            <dl>
                                <dd class="xuan">请选择</dd>
                                <dd>普通海报</dd>
                                <dd>热门</dd>
                                <dd>推荐</dd>
                                <dd>海报</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="tabl">
                        <span>标签</span>
                        <div class="table_box">
                            <div class="kuang">
                                <input class="selec" type="text" placeholder=" 请选择">
                                <i class="layui-icon layui-icon-triangle-d"></i>     
                            </div>
                            <dl>
                                <dd class="xuan">请选择</dd>
                                <dd>喜庆</dd>
                                <dd>节气</dd>
                                <dd>英雄</dd>
                                <dd>青春</dd>
                                <dd>魅力</dd>
                                <dd>问候</dd>
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
                </div>
                <div class="haibao">
                    <table cellspacing="0">
                        <tr class="first">
                            <th>
                                <input type="checkbox" class="check" id="allCheck">
                            </th>
                            <th>名称</th>
                            <th>缩略图</th>
                            <th>平台</th>
                            <th>类型</th>
                            <th>标签</th>
                            <th class="hot">热度
                                <div>
                                    <i class="layui-icon layui-icon-triangle-r iconup"></i>
                                    <i class="layui-icon layui-icon-triangle-d icondown"></i>
                                </div>
                            </th>
                            <th>创建时间</th>
                            <th>启用时间</th>
                            <th>是否启用</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="check">
                            </td>
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox" class="check">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
                            <td>泡妞许可证</td>
                            <td>
                                <img src="../../assets/img/f.jpg" />
                            </td>
                            <td>pc</td>
                            <td>普通海报</td>
                            <td>魅力</td>
                            <td>222</td>
                            <td class="cells">2017-11-11</td>
                            <td class="cells">2017-11-11</td>
                            <td class="yes">
                                <input type="checkbox">
                                <div>
                                    <em>是</em>
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
// import photo_content from "./photo_content";

export default {
    components:{
        mounted(){
            $(function(){
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
                //         $(this).parents().addClass("no");
                //         console.log($(this).children("em").html("无"));
                //     },
                //     function () {
                //         $(this).parents().removeClass("no");
                //         console.log($(this).children("em").html("有"));
                //     }
                // );
                $("#allCheck").checkBind($(".check"));

                // $("#menu_toggle").toggle(
                //     function () {
                //         $(".content").css({'width':'93%','left':'90px'});
                //     },
                //     function () {
                //         $(".content").css({'width':'100%','left':'220px'});
                //     }
                // );
                
            });
       }
    }
}
</script>

<style>
@import url(../../assets/css/photo);
</style>