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
  position: relative;
  background: $main_page_bg;

  .content {
    position: absolute;
    top: 20vh;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 24px;
      color: $main_black;
      padding: 10px;
    }

    button {
      width: 40%;
      height: 40px;
      color: $main_orange;
    }
  }
}
</style>
