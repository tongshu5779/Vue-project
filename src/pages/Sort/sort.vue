<template>
  <div class="sortWrap">
      <div class="sortPackage">
        <div class="sortHeader">
          <head-search></head-search>
        </div>
      </div>
      <div class="sortNavWarp"></div>
      <div class="sortContent"></div>
  </div>
</template>

<script>
    import headSearch from "../../components/headSearch/headSearch"
    export default {
        name: "sort",
        components:{
          headSearch
        }
    }
</script>

<style scoped lang="stylus">
   .sortWrap
         .sortPackage
             width 6.9rem
             height 0.87rem
             padding  0 .3rem
             display flex
             align-items center
             .sortHeader
                  width 6.9rem
                  height 0.56rem
                  background-color #EDEDED
                  display flex
                  justify-content center
</style>
