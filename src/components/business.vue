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
            <h1>开发原则</h1>
            <ul class="business-content-right">
              <li>
                <img src="../assets/img_yzx.png" alt="">
                <h3>一致性</h3>
                <span>Consistency</span>
              </li>
              <li>
                <img src="../assets/img_yzx.png" alt="">
                <h3>反馈</h3>
                <span>Feedback</span>
              </li>
              <li>
                <img src="../assets/img_yzx.png" alt="">
                <h3>效率</h3>
                <span>Efficiency</span>
              </li>
              <li>
                <img src="../assets/img_yzx.png" alt="">
                <h3>可控</h3>
                <span>Controllability</span>
              </li>
            </ul>
            <div class="page-guide">
              <h4>一致性 Consistency</h4>
              <ul>
                <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
                <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
              </ul>
              <h4>反馈 Feedback</h4>
              <ul>
                <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
                <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
              </ul>
              <h4>效率 Efficiency</h4>
              <ul>
                <li>简化流程：设计简洁直观的操作流程；</li>
                <li>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
                <li>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
              </ul>
              <h4>可控 Controllability</h4>
              <ul>
                <li>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
                <li>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
              </ul>
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
  .business-content-right img {
    margin: 40px auto 25px;
    width: 80px;
    height: 80px;
  }
  .business-content-right {
    margin: 30px 0 70px;
  }
  .business-content
  .business-content-right li {
    width: 23%;
    background: #fbfcfd;
    height: 204px;
    float: left;
    text-align: center;
    margin-left: 7px;
    margin-right: 7px;
  }
  .business-content-right li h3 {
    font-size: 18px;
    color: #1f2d3d;
    font-weight: 400;
    margin: 0;
  }
  .business-content-right li span {
    font-size: 14px;
    color: #99a9bf;
  }
  .page-guide h4 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #1f2d3d;
  }
  .page-guide ul {
    margin-bottom: 50px;
    padding-left: 0;
  }
  .page-guide ul li {
    font-size: 14px;
    margin-bottom: 10px;
    color: #99a9bf;
    list-style: none;
  }
</style>
