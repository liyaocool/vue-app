<template>
  <div class="home_wrap has_footer">
    <span class="svg-container">
      面包图标
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Bread"></use>
      </svg>
    </span>
    <span class="svg-container">
      面条图标
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Noodle"></use>
      </svg>
    </span>
    <span class="svg-container">
      西红柿
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Tomato-"></use>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="stylus" scoped>
.home_wrap {
  position: relative;

  .svg-container {
    .icon {
      width 50px;
      height 50px;
      }
    }
}
</style>

