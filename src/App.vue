<template>
  <div id="app">
    <div class="main_content">
      <router-view/>
    </div>
    <footer>
      <main-nav/>
    </footer>
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

<style lang="stylus">
.main_content {
  // padding-top: 44px;
  padding-bottom: 60px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 102;
}
</style>
