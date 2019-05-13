<template>
  <div class="col-md-11 container" style="left: 0;">
  <!--                人事管理-->
  <div class="row department rsobject">
    <div class="col-md-2 department_left">
      <ul class="uls">
        <li>
          <div class="box">
            <div class="you" ></div>
            <div class="xia" ></div>
          </div>
          <a href="#">
            <img src="../../assets/images/wenjian.png" alt="">
            <span>常用文件夹</span>
          </a>
          <ul class="wenjian">
            <li>
              <a href="#" >
                <img src="../../assets/images/tubiao.png" alt="">
                <span>所有未读（设置跳转）</span>
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../../assets/images/tubiao.png" alt="">
                <span>置顶邮件</span>
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../../assets/images/tubiao.png" alt="">
                <span>标签邮件</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div class="box">
            <div class="you1" ></div>
            <div class="xia1" ></div>
          </div>
          <a href="#">
            <img src="../../assets/images/wenjian.png" alt="">
            <span>事业部</span>
          </a>
          <ul class="shiye">

            <li class="yanfa">
              <div class="box">
                <div class="you2" ></div>
                <div class="xia2" ></div>
              </div>
              <a href="#" >
                <img src="../../assets/images/wenjian.png" alt="">
                <span>研发部</span>
              </a>
              <ul>
                <a href="#" >
                  <img src="../../assets/images/tubiao.png" alt="">
                  <span>前端</span>
                </a>
              </ul>
              <ul>
                <a href="#" >
                  <img src="../../assets/images/tubiao.png" alt="">
                  <span>所有</span>
                </a>
              </ul>
            </li>
            <li class="chanping">
              <a href="#" >
                <img src="../../assets/images/tubiao.png" alt="">
                <span>产品部</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-10 department_right-two">
      <div class="two-top">
        <a href="">获取选中行数据</a>
        <a href="">获取选中数目</a>
        <a href="">验证是否全选</a>
        <a href="">新增(iframe弹窗)</a>
        <a href="">新增(页面内弹窗)</a>
      </div>
      <div class="two-table">
        <div class="table-header">
          <table>
            <thead>
            <tr>
              <th>
                <div class="th-check">
                  <input type="checkbox" id="allCheck">

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>编号</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>所属部门</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>所属职位</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>状态</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>时间</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>操作</span>
                  </div>

                </div>
              </th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div class="th-check">
                  <input type="checkbox" class="checks">
                </div>
              </td>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>10001</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>研发部</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>前端</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>在职</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <span>2017-11-11 09:30:00</span>
                  </div>

                </div>
              </th>
              <th>
                <div class="th-title">
                  <div class="table-first">
                    <a>查看</a>
                    <a>编辑</a>
                    <a>删除</a>
                  </div>

                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div class="layui-table-page"><div id="layui-table-page1"><div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1"><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0"><i class="layui-icon"></i></a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" data-page="2">2</a><a href="javascript:;" data-page="3">3</a><span class="layui-laypage-spr">…</span><a href="javascript:;" class="layui-laypage-last" title="尾页" data-page="6">6</a><a href="javascript:;" class="layui-laypage-next" data-page="2"><i class="layui-icon"></i></a><span class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button type="button" class="layui-laypage-btn">确定</button></span><span class="layui-laypage-count">共 60 条</span><span class="layui-laypage-limits"><select lay-ignore=""><option value="10" selected="">10 条/页</option><option value="20">20 条/页</option><option value="30">30 条/页</option><option value="40">40 条/页</option><option value="50">50 条/页</option><option value="60">60 条/页</option><option value="70">70 条/页</option><option value="80">80 条/页</option><option value="90">90 条/页</option></select></span></div></div></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components:{

  },
  mounted(){
    $(function(){
      //左侧点击显示
      $(".uls .lis1").click(function(){
        $(".department_right p").css("display","none")
        $(".department_right .forms").css("display","block")

      })
      $(".uls .lis2").click(function(){
        $(".department_right p").css("display","none")
        $(".department_right .forms").css("display","block")

      })
      // $(".bm").click(function(){
      //   $(".bmobject").css("display","block")
      //   $(".rsobject").css("display","none")
      //
      // })
      // $(".rs").click(function(){
      //   $(".bmobject").css("display","none")
      //   $(".rsobject").css("display","block")
      //
      // })
      $(".uls li .you").click(function(){
        $(this).css("display","none")
        $(".uls li .xia").css("display","block")
        $(".uls li .wenjian").css("display","block")
      })
      $(".uls li .xia").click(function(){
        $(this).css("display","none")
        $(".uls li .you").css("display","block")
        $(".uls li .wenjian").css("display","none")
      })

      $(".uls li .you1").click(function(){
        $(this).css("display","none")
        $(".uls li .xia1").css("display","block")
        $(".uls li .shiye").css("display","block")
      })
      $(".uls li .xia1").click(function(){
        $(this).css("display","none")
        $(".uls li .you1").css("display","block")
        $(".uls li .shiye").css("display","none")
      })

      $(".uls li .you2").click(function(){
        $(this).css("display","none")
        $(".uls li .xia2").css("display","block")
        $(".uls li .yanfa ul").css("display","block")

      })
      $(".uls li .xia2").click(function(){
        $(this).css("display","none")
        $(".uls li .you2").css("display","block")
        $(".uls li .yanfa ul").css("display","none")

      })


      // $(".list3 .box2").click(function(){
      //     $(".list3 .box2 span").css("backgroundColor","green")
      //     $(".list3 .box2 .kong .img1").hide()
      //     $(".list3 .box2 .kong .img2").show()
      //
      // })
      // $(".list3 .box3").click(function(){
      //     $(".list3 .box3 span").css("backgroundColor","green")
      //     $(".list3 .box3 .kong .img1").hide()
      //     $(".list3 .box3 .kong .img2").show()
      //
      // })
      // $(".list3 .box4").click(function(){
      //     $(".list3 .box4 span").css("backgroundColor","green")
      //     $(".list3 .box4 .kong .img1").hide()
      //     $(".list3 .box4 .kong .img2").show()
      //
      // })
      $(".list3").toggle(
        function(){
          $(".list3 .box span").css("backgroundColor","green")
          $(".list3 .box .kong .img1").hide()
          $(".list3 .box .kong .img2").show()

        },
        function(){
          $(".list3 .box span").css("backgroundColor","")
          $(".list3 .box .kong .img1").show()
          $(".list3 .box .kong .img2").hide()

        }
      )
      $(".list4-left .yuan").click(function(){
        $(".list4-left").css("backgroundColor","#009688")
        $(".list4-left span").css("color","white")
        $(".list4-left-sp1").show()
        $(".list4-left-sp2").hide()
        $(this).css("transform","translateX(20px)")
      })
      $(".list4-left-sp1").click(function(){
        $(".list4-left").css("backgroundColor","white")
        $(".list4-left span").css("color","999")
        $(".list4-left-sp2").show()
        $(this).hide()
        $(".list4-left .yuan").css("transform","translateX(0)")
      })
      //全选复选框.checkBind("被控制的复选框",反选按钮);
      $("#allCheck").checkBind($(".checks"));
      $('#menu_toggle').toggle(
        function(){

          $('.container').css({'left':'90px'});

        },
        function(){

          $('.container').css({'left':'220px'});

        }
      )

    })
  }
}
</script>

<style>
@import url(../../assets/css/orgin);
</style>
