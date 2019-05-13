
$(function(){
    //导航栏点击下拉菜单
    $('.side-menu li').toggle(
        function () {
            $(this).find('.child_menu').slideDown();
            $(this).addClass('active');
            $(this).find('.child_menu.second_menu').css({'display':'none'});
        },
        function () {
            $(this).find('.child_menu').slideUp();
            $(this).removeClass('active');
        }
    );
     $('.secondaryMenu').toggle(
        function(){
             $(this).find('.child_menu.second_menu').slideDown();
        },
        function(){
             $(this).find('.child_menu.second_menu').slideUp();
        }
    )

    //点击当前页面li标签，改变背景
    $('.nav.child_menu li').click(function(){
        $(this).addClass('current-page');
    })


     //右上角消息设置
     $('.nav_menu .open').toggle(
        function(){
            $(this).find('.dropdown-menu').css({'display':'block'});
        },
        function(){
             $(this).find('.dropdown-menu').css({'display':'none'});
        }
    )

     $('.nav_menu .dropdown').toggle(
        function(){
            $(this).find('.msg_list').css({'display':'block'});
        },
        function(){
            $(this).find('.msg_list').css({'display':'none'});
        }
    )

    //板块点击效果
    $('.x_panel .collapse-link').toggle(
        function(){
            $(this).parents('.x_panel').find('.x_content').slideUp();
            $(this).find('i').removeClass('fa-chevron-up');
            $(this).find('i').addClass('fa-chevron-down');
        },
        function(){
            $(this).parents('.x_panel').find('.x_content').slideDown();
            $(this).find('i').removeClass('fa-chevron-down');
            $(this).find('i').addClass('fa-chevron-up');
        }
    )

    $('.x_panel .dropdown-toggle').toggle(
        function(){
            $(this).parents('.x_panel').find('.dropdown-menu').css({'display':'block'});
        },
        function(){
            $(this).parents('.x_panel').find('.dropdown-menu').css({'display':'none'});
        }
    )

    $('.x_panel .close-link').toggle(
        function(){
            $(this).parents('.x_panel').css({'display':'none'});
        },
        function(){
            // $(this).parents('.x_panel').css({'display':'block'});
        }
    )

    //点击菜单导航栏宽度改变
    $('#menu_toggle').toggle(
        function(){
            $(this).parents('body').removeClass('nav-md');
            $(this).parents('body').addClass('nav-sm');
            $('.col-md-3.layui-side').css({'width':'90px'});
            $('.layui-body').css({'left':'90px'});
            $('.layui-layout-left').css({'left':'90px'});
            $('.layui-effect-one').css({'left':'-170px'});
            $('.layui-effect-two').css({'left':'-67px'});
            $('.layui-watch-one').css({'left':'-148px'});
            $('.layui-watch-two').css({'left':'-248px'});
        },
        function(){
            $(this).parents('body').removeClass('nav-sm');
            $(this).parents('body').addClass('nav-md');
            $('.col-md-3.layui-side').css({'width':'220px'});
            $('.layui-body').css({'left':'220px'});
            $('.layui-layout-left').css({'left':'220px'});
            $('.layui-effect-one').css({'left':'-146px'});
            $('.layui-effect-two').css({'left':'-56px'});
            $('.layui-watch-one').css({'left':'-126px'});
            $('.layui-watch-two').css({'left':'-212px'});
        }
    )
    //点击顶部右侧效果
    $('.layui-layout-right li').eq(1).toggle(
        function(){
            $("#layui-layer4").css({ 'transform': "translateX(-300px)", 'transition': 'all 1s' });

        },
        function(){
            $("#layui-layer4").css({ 'transform': "translateX(300px)", 'transition': 'all 1s' });
        }
    )

    $('.layui-layout-right li').eq(2).toggle(
        function(){
            $("#layui-layer5").show();
        },
        function(){
            $("#layui-layer5").hide();
        },
    )

    $('.layui-layout-right li').eq(3).mouseenter(function(){
        $(this).find('.layui-nav-child').show();
        $(this).find('.layui-nav-more').css({'transform':'rotate(-180deg)','transition':'all 1s'});
    })
    $('.layui-layout-right li').eq(3).mouseout(function(){
        $(this).find('.layui-nav-child').hide();
        $(this).find('.layui-nav-more').css({'transform':'rotate(0deg)','transition':'all 1s'});
    })

    $('.layui-layout-right li').eq(4).toggle(
        function(){
            $("#layui-layer6").css({ 'transform': "translateX(-300px)", 'transition': 'all 1s' });
        },
        function(){
            $("#layui-layer6").css({ 'transform': "translateX(300px)", 'transition': 'all 1s' });
        }
    )
})