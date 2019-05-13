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
					<span>是否热门</span>
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
				</div>

				<div class="select-box">
					<span>是否发布</span>
					<el-select v-model="value4" placeholder="请选择">
						<el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>

			</template>
		</div>
		<div class="top-box two">
			<template>
				<div class="select-box">
					<span>时间</span>
					<!-- <el-select v-model="value5" placeholder="请选择">
						<el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select> -->
					<div class="block">
						<el-date-picker v-model="valueData" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
						</el-date-picker>
					</div>
				</div>
			</template>
		</div>
		<div class="top-box three">
			<template>
				<div class="select-box">
					<span>选择地区</span>
					<el-select v-model="value6" placeholder="请选择">
						<el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</template>
			<template>
				<div class="select-box">
					<span></span>
					<el-select v-model="value7" placeholder="请选择">
						<el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</template>
			<template>
				<div class="select-box">
					<span></span>
					<el-select v-model="value8" placeholder="请选择">
						<el-option v-for="item in options8" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</template>
			<i class="el-icon-search" style="font-size: 18px;color: white;"></i>
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
				options4: [{
						value: '选项1',
						label: '是'
					},
					{
						value: '选项2',
						label: '否'
					}
				],
				options5: [{
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
						label: 'p11c'
					}
				],
				options6: [{
						value: '选项1',
						label: '陕西'
						}
					],
				options7: [{
						value: '选项1',
						label: '西安'
					},
					{
						value: '选项2',
						label: '咸阳'
					},
					{
						value: '选项3',
						label: '渭南'
					},
					{
						value: '选项4',
						label: '宝鸡'
					},
					{
						value: '选项5',
						label: '平凉'
					}
				],
				options8: [{
						value: '选项1',
						label: '莲湖区'
					},
					{
						value: '选项2',
						label: '雁塔区'
					},
					{
						value: '选项3',
						label: '凤城区'
					},
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
		margin-left: -40px;
	}

	/* 	.select-box2{
		display: inline-block;
	} */
	.select-box>span {
		margin-right: 15px;
		margin-left: 65px;
	}

	.three {
		margin-left: -27px;
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
		margin-left: 50px;
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
	@media screen and (max-width: 1500px){
		.one{
			display: flex;
			margin: 20px 0;
		}
		.PTs{
			padding-left: 110px;
		}
		.ZX-form-top{
			height: 130px;
		}
		.ZX-form-top{
			height: 200px;
		}
	}
</style>
