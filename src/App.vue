<template>
  <div id="app">
    <header>
      <main-header/>
    </header>
    <div class="main_content">
      <router-view/>
    </div>
    <footer>
      <main-nav/>
    </footer>
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

<style lang="stylus">
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  z-index: 100;
}

.main_content {
  // padding-top 44px
  // padding-bottom 60px
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
}
</style>
