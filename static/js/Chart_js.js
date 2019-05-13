//图表1
$(function(){
	var myChart = echarts.init(document.getElementById('lineGraph'));
	

option = {
    xAxis: {
        type: 'category',
        boundaryGap : false,
        data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip : {
        trigger: 'axis',
    },
    yAxis : [
        {
            type : 'value',
        }
    ],
    grid: {
        left: '1%',
        right: '4%',
        bottom: '1%',
        top: '3%',
        containLabel: true
    },
    series: [
        {
            data: [65, 25, 80, 60, 38, 55, 40,70,40,55,42,60],
             type: 'line',
            areaStyle: {},smooth: true,
            itemStyle:{normal: {color:'#1e8082'}},//改变折点颜色
            symbolSize: 8,//改变折点大小
            lineStyle:{normal: {color:'#1e8082'}},//改变折线颜色
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90,36,55,28,35,60],
            areaStyle: {},smooth: true,
            type: 'line',
            itemStyle:{normal: {color:'#82e8d3'}},//改变折点颜色
            symbolSize: 8,//改变折点大小
            lineStyle:{normal: {color:'#82e8d3'}},//改变折线颜色
        }
    ]
};
    
	myChart.setOption(option);
	window.addEventListener("resize",function(){
        myChart.resize();
    });
});

//图表2
$(function(){
    var myChart = echarts.init(document.getElementById('barGraph'));
    

    option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['在线率', '完好率'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#063374"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{//'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        type: 'category',
        data: ['Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct ',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#197d7f",
                width: .5,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#197d7f",
            }
        }
    }],
    series: [{
        name: '接入率',
        type: 'bar',
        // data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#a5fdf2'
                }, {
                    offset: 1,
                    color: '#01fada'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '在线率',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#a5fdf2'
                }, {
                    offset: 1,
                    color: '#01fada'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '完好率',
        type: 'bar',
        data: [70, 48, 73, 68, 53, 47, 50, 72, 96, 86],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8fecd8'
                }, {
                    offset: 1,
                    color: '#028b6e'
                }]),
                opacity: 1,
            }
        }
    }]
};

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});

//图表3
$(function(){
    var myChart = echarts.init(document.getElementById('Radar'));
    

    // var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
option = {
    backgroundColor: '#fff',
    color: ['#00c2ff', '#00ffde', '#00ff7e'],
    legend: {
        show: true,
        // icon: 'circle',//图例形状
        bottom:0,
        center: 0,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#ade3ff'
        },
        data: ['2016', '2017', '2018'],
    },
    radar: [{
        
        indicator: [{
                text: '科技创新联盟',
                max: 120
            },
            {
                text: '科技成果转化中心',
                max: 120
            },
            {
                text: '工程技术中心（工程实验室）',
                max: 120
            },
            {
                text: '新型研发机构',
                max: 120
            },
            {
                text: '科技创孵化器',
                max: 120
            }
        ],

        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: 96,
        startAngle: 90,
        splitNumber: 3,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        // shape: 'circle',
        // backgroundColor: {
        //     image:imgPath[0]
        // },
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12, //外圈标签字体大小
                color: '#5b81cb' //外圈标签字体颜色
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['#fff', '#fff'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#b7b7b7'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#b7b7b7', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
            name: '2016',
            value: [85, 65, 55, 90, 82],
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#00c2ff'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00c2ff'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
             label: {                    // 单个拐点文本的样式设置                            
                    normal: {  
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14,           // 文字的字体大小
                        formatter:function(params) {  
                            return params.value;  
                        }  
                    }  
                },
            itemStyle: {
                normal: { //图形悬浮效果
                    borderColor: '#00c2ff',
                    borderWidth: 2.5
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '2017',
            value: [50, 20, 45, 30, 75],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#f9cf67',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#f9cf67'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#f9cf67'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '2018',
            value: [37, 80, 12, 50, 25],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#015a4c',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#015a4c'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#66aea3'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }]
    }, ]
};

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});


//图表4
$(function(){
    var myChart = echarts.init(document.getElementById('donutGraph'));
    
    var data = [{
    value: 3661,
    name: '<10w'
}, {
    value: 5713,
    name: '10w-50w'
}, {
    value: 9938,
    name: '50w-100w'
}, {
    value: 17623,
    name: '100w-500w'
}, {
    value: 3299,
    name: '>500w'
}];
option = {
    backgroundColor: '#fff',
    title: {
        text: '注册资金',
        subtext: '2016年',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});


//图表5
$(function(){
    var myChart = echarts.init(document.getElementById('pieChart'));
    
    option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});


//图表6
$(function(){
    var myChart = echarts.init(document.getElementById('pieArea'));
    
    var myData = ['一审服判息诉率', '撤诉率', '调解率', '实际执行率', '裁判自动履行率', '执行标的到位率', '再审审查率']
    var lineData = [100, 100, 100, 100, 100, 100, 100]
    var lastYearData = {
        1: [3, 20, 62, 34, 55, 65, 33]
    }
    var thisYearData = {
        1: [11, 38, 23, 39, 66, 66, 79]
    }
    var timeLineData = [1]
    var background = "#fff"; //背景 

    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend : {
                top : '2%',
                left : '25%',
                itemWidth : 16,
                itemHeight : 16,
                itemGap: 200,
                icon : 'horizontal',
                textStyle : {
                    color : '#333',
                    fontSize : 16,
                },
                data: ['2017', '2018']
            },
            grid: [{
                show: false,
                left: '3%',
                top: '15%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '15%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '3%',
                top: '15%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#009673',
                        fontSize: 12
                    }

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: myData
            }],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [
        {
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(3,147,114,0.27)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopLeft',
                    textStyle:{
                        color: '#009673',
                        fontSize: 14,
                    },
                    offset: [0, -20],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '2017',
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#039372'
                }
            },
            symbolRepeat: true,
            symbolSize: 14,
            data: lastYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30 * 1.1;
            }
        },
        {
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(54,215,182,0.27)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: '#009673',
                        fontSize: 14,
                    },
                    offset: [0, -20],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '2018',
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#36d7b6'
                }
            },
            symbolRepeat: true,
            symbolSize: 14,
            data: thisYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30 * 1.1;
            }
        }
        ]
    });

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});



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
            // $('.col-md-3.col_left').css({'width':'70px'});
        },
        function(){
            $(this).parents('body').removeClass('nav-sm');
            $(this).parents('body').addClass('nav-md');
        }
    )
})