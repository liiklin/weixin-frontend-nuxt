<template lang="pug">
div
  div(class="bg")
    img(src="~static/img/bg2.jpg")
  div(flex="dir:top" class="content")
    div(flex="main:center cross:center")
      div(class="btn" flex-box="1" flex="dir:top main:center cross=center" @click="extShowModal = true")
        div(class="btn-top" flex="main:center cross=center")
          span
            | 开始答题
        div(class="btn-bottom" flex="main:center cross=center")
          span
            | &nbsp;
      div(class="btn" flex-box="1" flex="dir:top main:center cross=center" @click="rateShowModal = true")
        div(class="btn-top-1" flex="main:center cross=center")
          span
            | 答题排行榜
        div(class="btn-bottom-1" flex="main:center cross=center")
          span
            | &nbsp;
    div(flex="main:center cross:center" class="activity-info"  @click="infoShowModal = true")
      i(class="iconfont icon-xinxi")
      span
        | 查看活动介绍
  modal(v-if="extShowModal" @close="extShowModal = false" color="#fa4d8d")
    div(slot="bg")
      img(src="~static/img/titlebg.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 选择科目
    div(slot="body")
      span
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
        | 选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body选择科目body
  modal(v-if="rateShowModal" @close="rateShowModal = false" color="#fdb32b")
    div(slot="bg")
      img(src="~static/img/titlebg.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 排行榜
  modal(v-if="infoShowModal" @close="infoShowModal = false" color="#69a2fc")
    div(slot="bg")
      img(src="~static/img/titlebg2.png" style="width:45%;max-height:50px;")
    span(slot="header")
      | 活动介绍
</template>

<script>
import Modal from '../components/modal.vue'

export default {
    components: {
        Modal
    },
    data() {
        return {
          extShowModal: false,
          rateShowModal: false,
          infoShowModal: false
        }
    }
}
</script>

<style scoped lang="stylus" src="~assets/pages/index.styl"></style>
