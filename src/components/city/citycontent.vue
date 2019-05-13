<template>
  <div class="section-right">
    <div class="section-center">
      <div id="select" class="select-box">
        <div class="layui-row select-table-section">
          <div class="select-table-label layui-col-md12">
            
            <label class="region">选择地区</label>
            <template>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
            </template>
            <div class="block">
              <span class="demonstration"></span>
              <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="selectedOptions2"
                @change="handleChange"
              ></el-cascader>
            </div>
             <div class="block">
              <span class="demonstration"></span>
              <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '北京市'
        }, {
          value: '选项2',
          label: '天津市'
        }, {
          value: '选项3',
          label: '河北省'
        }, {
          value: '选项4',
          label: '内蒙古'
        }, {
          value: '选项5',
          label: '辽宁省'
        },{
            value:'选项6',
            label:'吉林省'
        }
        ],
        value: ''
      }
    }
  }
</script>

<style>

@import url(../../assets/css/city);
</style>


