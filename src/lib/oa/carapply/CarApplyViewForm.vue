<!--
描述：办公自动化-公务用车申请-查看组件
开发人：hqj
开发日期：2017年10月19日
-->

<template lang="pug">
  div.el-form.kalix-form-table(slot="dialogFormSlot")
    div.table-title 吉林动画学院公务用车申请表
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="名称" v-bind:label-width="labelWidth" prop="title")
        el-input(v-model="formModel.title" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="填表时间" prop="creationDate" v-bind:label-width="labelWidth")
        kalix-datetimepicker(v-model="formModel.creationDate" style="width:100%" readonly)
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="申请部门" prop="orgName" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.orgName" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="申请时间" prop="applyDate" v-bind:label-width="labelWidth")
        kalix-datetimepicker(v-model="formModel.applyDate" style="width:100%" readonly)
    el-form-item(label="用车事由" prop="reason" v-bind:label-width="labelWidth")
      el-input(v-model="formModel.reason" readonly)
    div.s-flex
      div.s-flex_item
        div.s-flex
          el-form-item.kalix-form-table-td(label="乘车人数" prop="usageCount" v-bind:label-width="labelWidth")
            el-input(v-model="formModel.usageCount" readonly)
          el-form-item.s-flex_item.kalix-form-table-td(label="用车时段" v-bind:label-width="labelWidth")
      div.s-flex_item(style="margin-left:-1px")
        div.s-flex
          div.s-flex_item
            kalix-datetimepicker(v-model="formModel.beginDate" placeholder="选择开始时间" style="margin-left:1px;width:100%" readonly)
          div(style="line-height:32px") 至
          div.s-flex_item
            kalix-datetimepicker(v-model="formModel.endDate" placeholder="选择结束时间" style="width:100%" readonly)
    el-form-item(label="用车起始地点" prop="address" v-bind:label-width="labelWidth")
      el-input(v-model="formModel.address" readonly)
    div.s-flex
      // el-form-item.s-flex_item.kalix-form-table-td(label="用车情况" prop="city" v-bind:label-width="labelWidth")
        div(style="text-align:center")
          el-checkbox(v-model="formModel.city" disabled) 是否市内用车
      el-form-item.s-flex_item.kalix-form-table-td(label="用车情况" prop="city" v-bind:label-width="labelWidth")
        div(style="text-align:center")
          el-switch.s-flex_item(v-model="formModel.city" active-text="市内用车" inactive-text="市外用车" disabled)
      el-form-item.s-flex_item.kalix-form-table-td(label="申请人" prop="createBy" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.createBy" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="联系电话" prop="operatorPhone" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.operatorPhone" readonly)
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="部门陪同人员" prop="entourage" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.entourage" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="陪同人员电话" prop="entouragePhone" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.entouragePhone" readonly)
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="部门负责人" prop="depUser" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.depUser" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="部门主管领导" prop="depManageUser" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.depManageUser" readonly)
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="校务部" prop="schoolUser" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.schoolUser" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="校务部主管领导(市外)" prop="schoolManageUser" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.schoolManageUser" readonly)
    div(style="padding-left:20px;font-weight:bold") 以下是司机填写
    div.s-flex
      el-form-item.s-flex_item.kalix-form-table-td(label="车牌号" prop="carNo" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.carNo" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="起车公里数" prop="startKM" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.startKM" readonly)
      el-form-item.s-flex_item.kalix-form-table-td(label="收车公里数" prop="endKM" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.endKM" readonly)
    div(style="padding-left:20px;font-weight:bold") 注：合计里程金额（大车：5元/公里，小车：2元/公里）
</template>

<script type="text/ecmascript-6">
  // import DateTimePicker from '@/components/biz/date/datetimepicker.vue'

  export default {
    props: ['formModel'],
    data() {
      return {
        labelWidth: '110px'
      }
    },
    components: {
      // KalixDateTimePicker: DateTimePicker
    }
  }
</script>
