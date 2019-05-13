<template>
    <div>
        <layBody/>
        <layHide/>
    </div>
</template>

<script>
import layBody from '../components/selector/lay_body';
import layHide from '../components/selector/lay_hide';
export default {
  components:{
          layBody,
          layHide  
       },
        mounted(){
         
        $(function(){
            // 导航栏点击下拉菜单
            $(".side-menu li").click(function() {
                if($(this).find('.child_menu').css("display")=="none"){
                    $(this).addClass('active');
                    $(this).find('.child_menu').slideDown();
                }else {
                    $(this).find('.child_menu').slideUp();
                    $(this).removeClass('active');
                }
            })
            // //点击当前页面li标签，改变背景
            $('.nav.child_menu li').click(function(){
                $(this).addClass('current-page');
            })

            $('#menu_toggle').click(function(){
                if($('.col-md-3.layui-side').css('width')=='220px'){
                    $(this).parents('body').removeClass('nav-md');
                    $(this).parents('body').addClass('nav-sm');
                    $('.col-md-3.layui-side').css({'width':'90px'});
                    $('.layui-body').css({'left':'90px'});
                    $('.layui-layout-left').css({'left':'90px'});
                }else{
                    $(this).parents('body').removeClass('nav-sm');
                    $(this).parents('body').addClass('nav-md');
                    $('.col-md-3.layui-side').css({'width':'220px'});
                    $('.layui-body').css({'left':'220px'});
                    $('.layui-layout-left').css({'left':'220px'});
                }
            })
            
             $('.layui-layout-right li').eq(1).click(function(){
                if($('#layui-layer4').hasClass('layui-anim-rl')){
                    $("#layui-layer4").css({ 'transform': "translateX(-300px)", 'transition': 'all 1s' });
                    $('#layui-layer4').removeClass('layui-anim-rl');
                }else{
                    $("#layui-layer4").css({ 'transform': "translateX(300px)", 'transition': 'all 1s' });
                    $('#layui-layer4').addClass('layui-anim-rl');
                }
            })

        
            $('.layui-layout-right li').eq(2).click(function(){
                if($("#layui-layer5").css('display')=='none'){
                    $("#layui-layer5").show();
                }else{
                    $("#layui-layer5").hide();
                }
            })

            $('.layui-layout-right li').eq(3).mouseenter(function(){
                $(this).find('.layui-nav-child').show();
                $(this).find('.layui-nav-more').css({'transform':'rotate(-180deg)','transition':'all 1s'});
            })
            $('.layui-layout-right li').eq(3).mouseout(function(){
                $(this).find('.layui-nav-child').hide();
                $(this).find('.layui-nav-more').css({'transform':'rotate(0deg)','transition':'all 1s'});
            })

            $('.layui-layout-right li').eq(4).click(function(){
                if($('#layui-layer6').hasClass('layui-anim-rl')){
                    $("#layui-layer6").css({ 'transform': "translateX(-300px)", 'transition': 'all 1s' });
                    $('#layui-layer6').removeClass('layui-anim-rl');
                }else{
                    $("#layui-layer6").css({ 'transform': "translateX(300px)", 'transition': 'all 1s' });
                    $('#layui-layer6').addClass('layui-anim-rl');
                }
            })

        })
       }
}
</script>

<style>

</style>