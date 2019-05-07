<template>
  <div class="plugin_wrap">
    <ul>
      <router-link tag="li" to="betterScroll">better-scroll</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Plugin"
};
</script>

<style lang="stylus" scoped>
.plugin_wrap {
  position: relative;

  ul {
    li {
      background-color: #ddd;
      width: 100%;
      height: 40px;
    }
  }
}
</style>

