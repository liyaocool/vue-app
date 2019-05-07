<template>
  <header v-show="showHeader">
    <div class="title_content">
      <span v-show="canBack" class="fa fa-angle-left header_left" @click="goBack"></span>
      <span class="header_center">{{title}}</span>
      <span class="header_right">
        <slot></slot>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader_wrap",
  data() {
    return {};
  },
  computed: {
    showHeader() {
      return this.$route.meta.showHeader;
    },
    canBack() {
      return this.$route.meta.canBack;
    },
    title() {
      return this.$route.meta.title;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 44px;
  background: #fff;
  color: #000;
  z-index: 100;
  box-shadow: 0 1px 2px #ddd;

  .title_content {
    display: flex;
    width: 100%;
    height: 100%;
    line-height: 44px;
    color: $text_default;
    font-size: 16px;
    text-align: center;

    .header_left {
      width: 10%;
      height: 100%;
      line-height: 44px;
      font-size: 22px;
    }

    .header_center {
      width: 80%;
      height: 100%;
    }

    .header_right {
      width: 10%;
      height: 100%;
    }
  }
}
</style>
