<template>
  <div id="app">
    <main-view/>
    <main-nav/>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";

export default {
  name: "app",
  components: {
    MainNav
  }
};
</script>

<style lang="stylus" scoped>
#app {
  height: 100%;
}
</style>
