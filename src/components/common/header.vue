<template>
	<header class="erxin_header">
      <div class="container">
        <div class="container-logo">
        	<router-link :to="{ path:'/erxin' }">
        		<img src="../../assets/erxin_logo.png" alt="">
        	</router-link>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="{ path:'/business' }">
              商务
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link :to="{ path:'/table' }">
              我的管理
            </router-link>  
          </li> -->
          <li class="nav-item">
            大同
            <i class="el-icon-location" style="padding-left: 5px;"></i>
          </li>
        </ul>
      </div>
    </header>
</template>
<style>
	.erxin_header {
	  height: 80px;
	  background-color: #fff;
	  color: #fff;
	  top: 0;
	  left: 0;
	  width: 100%;
	  line-height: 80px;
	  z-index: 100;
	  position: fixed;
	  top: 0;
	}
	.container-logo {
		float: left;
	}
	.container-logo a {
		display: block;
	}
	.container-logo a img {
		margin-top: 24px;
	}
	.container {
	  width: 1140px;
	  padding: 0;
	  margin: 0 auto;
	  height: 100%;
	  box-sizing: border-box;
	}
	.container h1 {
	  margin: 0;
	  float: left;
	  font-size: 32px;
	  font-weight: 400;
	}
	.container .nav {
	  float: right;
	  height: 100%;
	  line-height: 80px;
	  background: transparent;
	  padding: 0;
	  margin: 0;
	}
	.container .nav li {
	  margin: 0;
	  float: left;
	  list-style: none;
	  position: relative;
	  cursor: pointer;
	  font-size: 16px;
	  color: #888;
	}
	.nav-item a {
	  text-decoration: none;
	  color: #888;
	  display: block;
	  padding: 0 22px;  
	}
	.nav-item a.router-link-active, .nav-item a:hover {
	  color: #333;
	}
	.nav-item a.router-link-active:after {
	  content: "";
	  display: inline-block;
	  position: absolute;
	  bottom: 15px;
	  left: calc(50% - 7px);
	  width: 14px;
	  height: 4px;
	  background: #409eff;
	}
</style>