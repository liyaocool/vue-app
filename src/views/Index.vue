<template>
  <div class="Index_wrap">
    <div class="content">
      <h1>多样化的Vue功能</h1>
      <button @click="start">开始体验</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    start() {
      this.$router.push({ path: "home" });
    }
  }
};
</script>
<style lang="stylus" scoped>
.Index_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 103;
  width: 100%;
  height: 100%;
  background: $main_page_bg;

  .content {
    margin: 50% auto;
    text-align: center;

    h1 {
      margin: 20px auto;
      font-size: 24px;
      color: $main_black;
    }

    button {
      width: 40%;
      height: 40px;
      color: $main_orange;
    }
  }
}
</style>
