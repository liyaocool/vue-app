<template>
  <div class="MainContent_wrap">
    <header>
      <main-header/>
    </header>
    <section>
      <slot name="MainContent"></slot>
    </section>
    <footer>
      <main-nav/>
    </footer>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainNav from "@/components/MainNav";
export default {
  name: "MainContent_wrap",
  components: {
    MainHeader,
    MainNav
  }
};
</script>

<style lang="stylus" scoped>
</style>
