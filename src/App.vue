<template>
  <div id="app">
    <main-header/>
    <main-view/>
    <main-nav/>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import MainView from "@/components/MainView"
export default {
  name: "app",
  components: {
    MainView,
    MainNav
  }
};
</script>

<style lang="stylus" scoped>
#app {
  height: 100%;
}
</style>
