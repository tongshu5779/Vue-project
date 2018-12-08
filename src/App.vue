<template>
  <div id="app">
    <router-view></router-view>
    <foot v-show="$route.meta.name"></foot>
  </div>
</template>

<script>
  import foot from "@/components/foot/foot"
  export default {
  name: 'App',
  mounted(){
    this.$store.dispatch("getUser")
  },
  components:{
    foot
  }
}
</script>

<style>

</style>
