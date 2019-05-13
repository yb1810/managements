<template>
  <div class="col-md-11 container" style="left: 0;">
    <!--                部门管理-->
    <div class="row department bmobject">
      <div class="col-md-2 department_left">
        <ul class="uls">
          <li class="lis1">
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
          <li class="lis2">
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
      <div class="col-md-10 department_right">
        <p>
          点击左侧菜单，右侧将会显示当前点击节点的对应内容
        </p>
        <form action="" class="forms">
          <div class="list1">
            <div class="col-md-6">
              <label for="">员工部门：</label>

              <div class="list1-left">
                <input type="text" value="所有" class="suoyou">
              </div>
            </div>
          </div>
          <div class="list2">
            <div class="col-md-6">
              <label for="">员工姓名：</label>

              <div class="list1-left">
                <input type="text" value="" class="suoyou">
              </div>
            </div>
            <div class="col-md-6">
              <label for="">技术工种：</label>

              <div class="list1-left list1-box">
                <select name="" id="">
                  <option value="">请选择</option>
                  <option value="">前端工程师</option>
                  <option value="">Node.js工程师</option>
                  <option value="">PHP工程师</option>
                  <option value="">Java工程师</option>
                  <option value="">运维</option>
                  <option value="">视觉设计师</option>
                </select>

              </div>
            </div>

          </div>
          <div class="list3">
            <label for="">兴趣爱好：</label>
            <div class="list1-left list3-left">
              <div class="box box1">
                <span>写作</span>
                <div class="kong">
                  <img src="../../assets/images/gou.png" alt="" class="img1">
                  <img src="../../assets/images/lvgou.png" alt="" class="img2">
                </div>
              </div>
              <div class="box box2">
                <span>阅读</span>
                <div class="kong">
                  <img src="../../assets/images/gou.png" alt="" class="img1">
                  <img src="../../assets/images/lvgou.png" alt="" class="img2">
                </div>
              </div>
              <div class="box box3">
                <span>代码</span>
                <div class="kong">
                  <img src="../../assets/images/gou.png" alt="" class="img1">
                  <img src="../../assets/images/lvgou.png" alt="" class="img2">
                </div>
              </div>
              <div class="box box4">
                <span>做梦</span>
                <div class="kong">
                  <img src="../../assets/images/gou.png" alt="" class="img1">
                  <img src="../../assets/images/lvgou.png" alt="" class="img2">
                </div>
              </div>

            </div>
          </div>
          <div class="list4">
            <div class="col-md-6">
              <label for="">是否婚姻：</label>

              <div class="list1-left list4-left">
                <div class="yuan"></div>
                <span class="list4-left-sp1">是</span>
                <span class="list4-left-sp2">否</span>

              </div>
            </div>
          </div>
          <div class="list5">
            <div class="col-md-8">
              <label for="">所属职称：</label>

              <div class="list1-left list5-left">
                <div class="list5-1">
                  <div class="list5-yuan"></div>
                  <span>经理</span>
                </div>
                <div class="list5-1">
                  <div class="list5-yuan"></div>
                  <span>主管</span>
                </div>
                <div class="list5-1">
                  <div class="list5-yuan"></div>
                  <span>码农</span>
                </div>
                <div class="list5-1">
                  <div class="list5-yuan"></div>
                  <span>端水</span>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label qitaxinxi">其它信息：</label>
            <div class="layui-input-block"> <textarea name="other" placeholder="" class="layui-textarea"></textarea> </div>
          </div>
          <div class="list6">
            <div class="list6-box col-md-6">
              <input type="checkbox" class="inp">
              <label>同意</label>
            </div>

          </div>

          <div class="list7">
            <div class="list7-box col-md-6">
              <input type="submit" class="sub" value="立即提交">
              <input type="reset" class="res" value="重置">

            </div>

          </div>
        </form>
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
      $(".list3 .box1").click(function(){
        $(".list3 .box1 span").css("backgroundColor","green")
        $(".list3 .box1 .kong .img1").hide()
        $(".list3 .box1 .kong .img2").show()

      })

      $(".list3 .box2").click(function(){
          $(".list3 .box2 span").css("backgroundColor","green")
          $(".list3 .box2 .kong .img1").hide()
          $(".list3 .box2 .kong .img2").show()

      })
      $(".list3 .box3").click(function(){
          $(".list3 .box3 span").css("backgroundColor","green")
          $(".list3 .box3 .kong .img1").hide()
          $(".list3 .box3 .kong .img2").show()

      })
      $(".list3 .box4").click(function(){
          $(".list3 .box4 span").css("backgroundColor","green")
          $(".list3 .box4 .kong .img1").hide()
          $(".list3 .box4 .kong .img2").show()

      })
      // $(".list3").toggle(
      //   function(){
      //     $(".list3 .box span").css("backgroundColor","green")
      //     $(".list3 .box .kong .img1").hide()
      //     $(".list3 .box .kong .img2").show()
      //
      //   },
      //   function(){
      //     $(".list3 .box span").css("backgroundColor","")
      //     $(".list3 .box .kong .img1").show()
      //     $(".list3 .box .kong .img2").hide()
      //
      //   }
      // )
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
