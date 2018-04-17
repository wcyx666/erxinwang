<template>
	<div class="admin">
		<div class="admin-box"></div>
		<div class="admin-content">
			<div class="admin-content-form">
				<h1>管理中心</h1>
				<p> System Management Center </p>
				<el-form :label-position="labelPosition" label-width="80px">
				  <el-form-item label="用户名">
				    <el-input v-model="name" prefix-icon="el-icon-news"></el-input>
				  </el-form-item>
				  <el-form-item label="密码">
				    <el-input v-model="psw" prefix-icon="el-icon-goods"></el-input>
				  </el-form-item>
				</el-form>
				<a href="javascript:void(0)" class="logo" @click="login">登录</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				name:"123",
				psw:"213"
			}
		},
		methods :{
			login () {
				let that = this;
				this.$ajax({
					method: 'post',
					url: 'api/login.php',
					data: {
						name: this.name,
						psw: this.psw
					}
				}).then(function(response) {
					console.log(response.data.status)
					if( response.data.status == 0 ){
						sessionStorage.setItem('key', 1);
						that.$router.push({path:'/table'});
					}else {
						
					}
	            }).catch(function(error) {
	               console.log(error);
	            });
			}
		}
	}
</script>
<style>
	.admin {
		width: 100%;
	    height: 100%;
	    z-index: 1;
	    background-image: url(../assets/4.jpg);
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1;
	}
	.admin-box {
		width: 100%;
	    height: 100%;
	    z-index: 1;
	    background-color: rgba(0,0,0,.95);
	    background-image: -webkit-linear-gradient(left,transparent 0,#1b1f27 100%);
	    background-image: -o-linear-gradient(left,transparent 0,#1b1f27 100%);
	    background-image: linear-gradient(to right,transparent 0,#1b1f27 100%);
	    background-repeat: repeat-x;
	    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#ff1b1f27', GradientType=1);
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1;
	    opacity: .3;
	}
	.admin-content {
		background: url(../assets/dot.png);
    	height: 100%;
	}
	.admin-content-form {
		padding: 20px;
		position: fixed;
		z-index: 2;
		left: 50%;
		top: 50%;
		margin-top: -300px;
		margin-left: -200px;
		border-radius: 5px;
		width: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: rgba(38,43,54,.9);
		padding: 20px;
		z-index: 300;
	}
	.admin-content-form h1 {
		font-size: 26px;
	    font-weight: 500;
	    padding: 0;
	    line-height: 30px;
	    text-align: center;
	    color: #259dab;
	}
	.admin-content-form p {
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		text-align: center;
		color: #259dab;
		border-bottom: 1px solid #555;
		padding-bottom: 10px;
	}
	.el-form {
		padding-right: 30px;
		margin: 30px 0;
	}
	.logo {
		display: block;
		width: 100%;
		height: 50px;
		background: #259dab;
		color: #fff;
		text-align: center;
		line-height: 50px;
		border-radius: 5px;
		font-size: 16px;
	}
</style>