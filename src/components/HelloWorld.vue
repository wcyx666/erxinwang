<template>
  <div class="business">
    <div class="business-content">
      <el-row>
        <el-col :span="5">
          <ul>  
              <li>
                <router-link to="">
                  开发原则
                </router-link>
              </li>
              <li>
                <router-link to="">
                  案例展示
                </router-link>
              </li>
          </ul>
        </el-col>
        <el-col :span="19">
          <h1>开发原则</h1>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
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
  .business {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
  .business-content {
    padding: 55px 30px 95px;
    box-sizing: border-box;
  }

</style>
