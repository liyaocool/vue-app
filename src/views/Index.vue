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
  position: fixed;
  z-index: 1; // >footNav z-indx 0
  width: 100%;
  height: 100%;
  background: $main_page_bg;

  .content {
    margin: 20% auto;
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
