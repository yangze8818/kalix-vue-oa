<!--
描述：人员管理-临时申请-查看组件
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  kalix-dialog.user-add(bizKey="tempApply"
  v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL"
  ref="kalixBizDialog"
  v-bind:isView="readonly"
  )
    div.el-form.kalix-form-table(slot="dialogFormSlot")
      kalix-temp-apply-view-form(v-bind:form-model="formModel")
</template>

<script type="text/ecmascript-6">
  // import Dialog from '@/components/custom/baseDialog.vue'
  // import BaseDictSelect from '@/components/custom/baseDictSelect'
  import TempApplyViewForm from './TempApplyViewForm'
  import FormModel from './model'

  export default {
    name: 'OaTempApplyView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        targetURL: '',
        readonly: true
      }
    },
    created() {
      this.labelWidth = '110px'
//      this.getMeetingTypeName()
    },
    components: {
      // KalixDialog: Dialog,
      // KalixDictSelect: BaseDictSelect,
      KalixTempApplyViewForm: TempApplyViewForm
    },
    methods: {
    }
  }
</script>
