<template>
  <div id="app">
    <main-header/>
    <main-view/>
    <main-nav/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainNav from "@/components/MainNav";

export default {
  name: "app",
  components: {
    MainHeader,
    MainNav
  }
};
</script>

<style lang="stylus" scoped>
#app {
  height: 100%;
}
</style>
