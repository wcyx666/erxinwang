<template>
  <div class="business">
    <Header></Header>
    <div class="business-content">
      <div class="business-content-box">
        <el-row>
          <el-col :span="5">
            <ul class="business-content-btn">  
                <li>
                  <router-link to="/business">
                    开发原则
                  </router-link>
                </li>
                <li>
                  <router-link to="/anli">
                    商务合作
                  </router-link>
                </li>
            </ul>
          </el-col>
          <el-col :span="19">
            <h1>商务合作</h1>
            <div class="anli">

            	<img src="../assets/timg.jpg" alt="">
            	<h2>联系方式</h2>
            	<p>手机号码：15110729331</p>
            	<p>QQ号码：769382595</p>
            	<p>邮箱：wxyx666@163.com</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './common/header.vue'
import Footer from './common/footer.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    Header,
    Footer
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .business-content {
    width: 1140px;
    margin: 80px auto;
  }
  .business-content-box {
    padding: 55px 30px 95px;
  }
  .business-content-btn li a {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: .15s ease-out;
    font-weight: 700;
  }
  .business-content-btn li a.router-link-active {
    color: #409eff;
  }
  .business-content h1 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
    margin-bottom: 10px;
  }
  .anli h2 {
  	font-weight: 400;
    color: #888;
    font-size: 28px;
    padding-bottom: 20px;
  }
  .anli p {
  	font-size: 18px;
  	color: #1f2f3d;
  	padding-bottom: 10px;
  }
  .anli img {
    margin: 40px auto 25px;
    width: 100%;
  }
  .anli {
    margin: 30px 0 70px;
  }
</style>
