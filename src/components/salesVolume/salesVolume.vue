<template>
	<div class="layui-fluid">
		<div class="layui-con">
			<p>列宽自动分配</p>
			<div class="layui-card-body">
				<div id="main" class="echart-table" style="width: 100%; height: 280px;">
					
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import echarts from "echarts";
	import '../../../node_modules/echarts/dist/echarts.js'
	export default{
		mounted(){
			var myChart = echarts.init(document.getElementById('main'));
			var colors = ['#5793f3', '#d14a61', '#675bba'];


			var option = {
				color: colors,

				tooltip: {
					trigger: 'none',
					axisPointer: {
						type: 'cross'
					}
				},
				legend: {
					data:['飞鹰队', '猎豹队']
				},
				grid: {
					top: 70,
					bottom: 50
				},
				xAxis: [
					{
						type: 'category',
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							onZero: false,
							lineStyle: {
								/* color: colors[1] */
							}
						},
						axisPointer: {
							label: {
								formatter: function (params) {
									return  params.value
										+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
								}
							}
						},
						data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
					},
					{
						type: 'category',
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							onZero: false,
							lineStyle: {
								/* color: colors[0] */
							}
						},
						axisPointer: {
							label: {
								formatter: function (params) {
									return params.value
										+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
								}
							}
						},
						/* data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] */
					}
				],
				yAxis: [
					{
						type: 'value',
						data: ["0万元","5万元","10万元","15万元","20万元","25万元","30万元"]
					}
				],
				series: [
					{
						name:'飞鹰队',
						type:'line',
						xAxisIndex: 1,
						smooth: true,
						data: [11,11, 15, 13, 12, 13, 20, 12, 14, 25, 11, 24]
					},
					{
						name:'猎豹队',
						type:'line',
						smooth: true,
						data: [10, 30, 21, 15, 23, 12, 9, 14, 13, 18, 16, 20]
					}
				]
			};
			 myChart.setOption(option);
				window.addEventListener("resize",function(){
					myChart.resize();
				});
		}
	}
</script>

<style scoped>
	@import url(../../assets/css/visitorNum);
</style>
