<template>
  <div id="app">
    <div class="main_content">
      <main-view/>
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
  padding-bottom: 60px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 102;
}
</style>
