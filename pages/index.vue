<template lang="pug">
div
  div(class="bg")
    img(src="~static/img/bg2.jpg")
  div(flex="dir:top" class="content")
    div(flex="main:center cross:center")
      div(class="btn" flex-box="1" flex="dir:top main:center cross=center")
        div(class="btn-top" flex="main:center cross=center" @click="extShowModal = true")
          span
            | 开始答题
      div(class="btn" flex-box="1" flex="dir:top main:center cross=center")
        div(class="btn-top-1" flex="main:center cross=center" @click="rateShowModal = true")
          span
            | 答题排行榜
    div(flex="main:center cross:center" class="activity-info")
      div(@click="infoShowModal = true")
        i(class="iconfont icon-xinxi")
        span
          | 查看活动介绍
  modal(v-if="extShowModal" @close="extShowModal = false" color="#fa4d8d" @click="doExam(1)")
    div(slot="head-bg")
      img(src="~static/img/titlebg.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 选择科目
    div(slot="body")
      List(:list="this.list" v-bind:paperId="this.paperId" @onPropsChange="change")
  modal(v-if="rateShowModal" @close="rateShowModal = false" color="#fdb32b")
    div(slot="head-bg")
      img(src="~static/img/titlebg.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 排行榜
    div(slot="body")
      Vtable
  modal(v-if="infoShowModal" @close="infoShowModal = false" color="#69a2fc")
    div(slot="head-bg")
      img(src="~static/img/titlebg2.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 活动介绍
    div(slot="body")
      span
        | 活动介绍。
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '../components/modal.vue'
import List from '../components/list.vue'
import Vtable from '../components/table.vue'

function fetchPaperList(store){
  return store.dispatch('FETCH_PAPER_LIST_DATA', {
    paperList: [store.state.paperList]
  })
}

// function fetchRankingList(store) {
//   return store.dispatch('FETCH_PAPER_LIST_DATA', {
//     paperList: [store.state.paperList]
//   })
// }

export default {
    components: {
        Modal,
        List,
        Vtable
    },
    data() {
        return {
          extShowModal: false,
          rateShowModal: false,
          infoShowModal: false,
          list:[],
          paperId:''
        }
    },
    methods:{
      change(propName,newVal,oldVal){
        this[propName]=newVal
      },
      doExam(paperId){
        this.$route.push({ name: 'exam'})
        // console.log(`this.$route.push=>${this.$route.push}`)
      }
    },
    computed: {
      ...mapGetters([
        'activePaperList'
      ]),
    },
    beforeMount (){
      fetchPaperList(this.$store).then(()=>{
        this.list = this.$store.getters.activePaperList
      })
    }
}
</script>

<style scoped lang="stylus" src="~assets/pages/index.styl"></style>
