<template>
	<div class="table">
		<Header></Header>
		<div class="table-main">
			<div class="table-main-tag">
				<el-tag>出行</el-tag>
				<el-tag @click="pinche">拼车</el-tag>
			</div>
			<div class="table-main-tab">
				<el-table
			    :data="tableData"
			    style="width: 100%">
				    <el-table-column
				      label="姓名"
				      width="100">
				      <template slot-scope="scope">
				        {{ scope.row.name }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="电话"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.phone }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="车牌"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.server }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="车型"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.models }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="出发地"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.localc }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="目的地"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.local }}
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="拨打次数"
				      width="140">
				      <template slot-scope="scope">
				        {{ scope.row.uid }}
				      </template>
				    </el-table-column>
				    <el-table-column label="操作">
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      </template>
				    </el-table-column>
				</el-table>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './common/header.vue'
	import Footer from './common/footer.vue'
	export default {
		data() {
			return {
				tableData: []
			}
		},
		components:{
			Header,
			Footer
		},
		mounted () {
			let that = this;
			this.$ajax.post('api/all-chuxing.php')
				.then(function (response) {
					that.tableData = response.data;
				})
				.catch(function (error) {
					console.log(error);
			});
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			pinche () {
				console.log(1)
				let that = this;
				this.$ajax.post('api/pinche.php')
					.then(function (response) {
						that.tableData = response.data;
					})
					.catch(function (error) {
						console.log(error);
				});
			}
		}
	}
</script>
<style>
	.table-main {
		width: 1140px;
		margin: 120px auto;
	}
	.table-main-tag {
		padding-bottom: 30px;
	}
</style>