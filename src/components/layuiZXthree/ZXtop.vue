<template>
	<div class="ZX-form-top">
		<div class="top-box one">
			<template>
				<div class="select-box PTs">
					<span>平台</span>
					<el-select v-model="value1" placeholder="请选择">
						<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>

				<div class="select-box">
					<span>类型</span>
					<el-select v-model="value2" placeholder="请选择">
						<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>

				<div class="select-box">
					<span>是否原创</span>
					<el-select v-model="value3" placeholder="请选择">
						<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<i class="el-icon-search" style="font-size: 18px;color: white;"></i>
				</div>

			</template>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options1: [{
						value: '选项1',
						label: '智汇魔方'
					},
					{
						value: '选项2',
						label: '汇贷客'
					},
					{
						value: '选项3',
						label: '公众号'
					},
					{
						value: '选项4',
						label: 'web'
					},
					{
						value: '选项5',
						label: 'pc'
					}
				],
				options2: [{
						value: '选项1',
						label: '是'
					},
					{
						value: '选项2',
						label: '否'
					}
				],
				options3: [{
						value: '选项1',
						label: '是'
					},
					{
						value: '选项2',
						label: '否'
					}
				],
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				value7: '',
				value8: '',
				valueData:''



			}
		}
	}
</script>
<style scoped>
	.select-box {
		display: inline-block;
		margin-left: -20px;
	}

	/* 	.select-box2{
		display: inline-block;
	} */
	.select-box>span {
		margin-right: 15px;
		margin-left: 65px;
	}

	.top-box {
		margin-bottom: 5px;
	}

	.three .el-select {
		margin-right: -25px;
	}

	.top-box i {
		width: 50px;
		cursor: pointer;
		text-align: center;
		line-height: 40px;
		display: inline-block;
		background: #009688;
		margin-left: 20px;
		border-radius: 10px;
	}
	
	.block{
		display: inline-block;
	}
	.el-date-picker{
		height: 650px!important;
	}
	
	.el-range-editor.el-input__inner{
		width: 198px;
		padding: 5 0;
	}
	.ZX-form-top{
		height: 50px;
	}
	@media screen and (max-width: 1400px){
		.select-box{
			display: flex;
			margin: 10px 0;
		}
		.PTs{
			/* padding-left: 27px; */
		}
		.ZX-form-top{
			height: 130px;
		}
	}
</style>
