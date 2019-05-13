<template>
	<div class="ZX-form-bottom">
		<div class="operation">
			<el-row>
				<el-button icon="el-icon-delete" type="danger">删除</el-button>
				<el-button icon="el-icon-plus" type="primary">添加</el-button>
			</el-row>
		</div>
		<div class="la-form">
			<table cellspacing="0" cellpadding="5">
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					<td>标题</td>
					<td>平台</td>
					<td>类型</td>
					<td>类型</td>
					<td>排序</td>
					<td>创造时间</td>
					<td>操作</td>
				</tr>
				<tr height="38px" @mousemove="changecolor()">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji" >公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td>18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
				<tr height="38px">
					<td><input class="checkd" type="checkbox"></td>
					 
					<td class="bianji">标题</td>
					<td class="bianji">公众号</td>
					<td>
						热门
					</td>
					<td>
						类型
					</td>
					<td class="bianji">100</td>
					<td class="bianji">18-12</td>
					<td>
						<el-row>
							<el-button type="info" size="mini">查看</el-button>
							<el-button type="primary" size="mini">编辑</el-button>
							<el-button type="danger" size="mini">添加</el-button>
						</el-row>
					</td>
				</tr>
			</table>
			<div class="tfoot">
				<el-pagination :current-page="currentPage4" @current-change="handleCurrentChange" @size-change="handleSizeChange"
				 :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="40" background >
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: false,
				value2: true,
				value3: false,
				value4: true,
				value5: false,
				value6: true,
				value7: false,
				value8: true,
				value9: false,
				value10: true,
				value11: false,
				value12: true,
				value13: false,
				value14: true,
				value15: false,
				value16: true,
				value17: false,
				value18: true,
				value19: false,
				value20: true,
				value21: false,
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 1,
				ISbg:false
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			changecolor(){
				this.ISbg = true;
			}
			
		},
		mounted(){
			var tdd=document.querySelectorAll(".bianji");
			// console.log(tdd.length);
			for(var i=0;i<tdd.length;i++){
				tdd[i].setAttribute("contenteditable","true");
			}
		}
	};
</script>

<style scoped>
	table {
		/* width: 1256px; */
		text-align: left;
	}

	table tr:first-child {
		background: #f2f2f2;
	}
	table td:first-child {
		text-align: center;
		width: 102px;
	}

	table tr td {
		width: 132px;
	}

	table {
		border-collapse: collapse;
	}

	table tr {
		border: 1px solid #e6e6e6;
	}
	table td{
		width: 130px;
	}

	table td:last-child {
		width: 185px;
	}

	table td:last-child .el-button span {
		line-height: 40px;
	}
	table tr td button{
		padding: 5px;
	}

	.tfoot {
		width: 1245px;
		height: 38px;
		padding-top: 10px;
		padding-left: 8px;
		border: 1px solid #e6e6e6;
		border-top: 0px;
	}

	input[type="checkbox"] {
		-webkit-appearance: none;
		outline: none;
	}

	.el-switch {
		width: 50px;
	}
	
	.checkd {
		width: 18px;
		height: 18px;
		background: #ffffff;
		border: 1px solid #e3e3e3;
	}

	.checkd:checked {
		background: url("../../assets/img/checkd.png") no-repeat;
	}
	tr:hover{
		background: #f2f2f2;
	}
</style>
