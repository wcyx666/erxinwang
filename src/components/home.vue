<template>
	<div class="home">
		<Header></Header>
		<div class="home-mian">
			<div class="home_desc">
				<h1>大同而信外包技术团队</h1>
				<p>大同而信外包团队，承包企业站、小程序、App等技术开发与技术支持</p>
				<div class="banner-box">
					<img src="../assets/banner.png" alt="">
				</div>
			</div>
			<div class="home_router">
				<ul>
					<li>
						<div class="card">
							<router-link to="">
								<img src="../assets/img_hezuo.png" alt="">
								<h2>商务</h2>
								<p>了解我们，加入我们，让您的企业更有活力。</p>
							</router-link>
						</div>
					</li>
					<li>
						<div class="card">
							<router-link to="">
								<img src="../assets/img_ziyuan.png" alt="">
								<h2>资源</h2>
								<p>《拼车就走》微信小程序，提供山西地区拼车信息。</p>
							</router-link>
						</div>
					</li>
					<li>
						<div class="card">
							<router-link to="">
								<img src="../assets/img_gl.png" alt="">
								<h2>管理</h2>
								<p>《拼车就走》微信小程序后台管理系统。</p>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from './common/header.vue'
	import Footer from './common/footer.vue'
	export default {
		data () {
			return {

			}
		},
		components:{
			Header,
			Footer
		}
	}
</script>
<style>
.home-mian {
	margin-top: 120px;
}
.home_desc {
	text-align: center;
}
.home_desc h1 {
	font-size: 34px;
	margin: 0;
	line-height: 48px;
	color: #555;
	font-weight: bold;
}
.home_desc p {
	font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px;

}
.banner-box {
	width: 688px;
	height: 402px;
	margin: 80px auto;
	overflow: hidden;
}
.banner-box img {
	transition: all 0.6s; 
}
.banner-box img:hover {
 	transform: scale(1.1);
}
.home_router {
	margin: 0 auto 110px;
    width: 1140px;
}
.home_router ul li {
    width: 33.33333%;
    padding: 0 19px;
    box-sizing: border-box;
    float: left;
    list-style: none;
}
.card {
    height: 430px;
    width: 100%;
    background: #fff;
    border: 1px solid #eaeefb;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all .3s ease-in-out;
    bottom: 0;
}
.card img {
	width: 180px;
}
.card h2 {
	margin: 0;
	font-size: 18px;
	color: #1f2f3d;
	font-weight: 400;
}
.card p {
	font-size: 14px;
    color: #99a9bf;
    padding: 25px;
    line-height: 20px;
}
.card:hover {
    bottom: 6px;
    box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
}
</style>