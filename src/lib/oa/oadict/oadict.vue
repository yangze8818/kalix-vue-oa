<!--
描述：我的首页-数据字典组件
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  keep-alive
    kalix-base-dict(ref="baseTableRef" v-bind:bizKey="bizKey" v-bind:bizDialog="bizDialog" v-bind:dictComponent="dictComponent"
      v-bind:targetURL="targetURL" v-bind:dialogOptions="dialogOptions")
</template>

<script type="text/ecmascript-6">
  // import BaseDict from '@/components/biz/dict/basedict'
  //  import Vue from 'vue'
  // import {OaDictURL, OaDictComponent, OaDictsTypesListURL} from '../config.toml'
  import {OaDictURL, OaDictsTypesListURL} from '../config.toml'
  export default {
    name: 'kalix-oa-oadict',
    data() {
      return {
        dialogOptions: {
          targetURL: OaDictURL,
          dictTypesListURL: OaDictsTypesListURL,
          bizKey: 'dict'
        },
        bizKey: 'dict',
        // dictComponent: OaDictComponent,
        dictComponent: [],
        targetURL: OaDictURL,
        bizDialog: [
          {id: 'view', dialog: 'basedictView'},
          {id: 'edit', dialog: 'basedictAdd'},
          {id: 'add', dialog: 'basedictAdd'}
        ]
      }
    },
    created() {
//      this.tempFormModel = JSON.stringify(Object.assign({}, this.formModel))
//      this.dictComponent.forEach((item) => {
//        console.log(`[kalix]-[${this.bizKey}] registry name is:  ${item.name}, registry path is: ${item.path}`)
//        Vue.component(item.name, require('' + item.path))
//      })
    },
    methods: {},
    components: {
      // KalixBaseDict: BaseDict
//      KalixUserAdd: UserAdd
    }
  }
</script>

<style scoped lang="stylus">

</style>
