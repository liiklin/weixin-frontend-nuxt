<template lang="pug">
div
  .list(v-for="data in listDatas")
    span
      | {{data.title}}
    i(class="iconfont icon-xuanze")
</template>

<script>
export default {
    name: "list",
    data() {
        return {
          listDatas:[{
            id:1,
            title:"科目标题1"
          },
          {
            id:2,
            title:"科目标题2"
          },
          {
            id:3,
            title:"科目标题3"
          },
          {
            id:4,
            title:"科目标题4"
          },
          {
            id:5,
            title:"科目标题5"
          }]
        }
    }
}
</script>

<style scoped lang="stylus" src="~assets/components/list.styl"></style>
