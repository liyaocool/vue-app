<template>
  <header>
    <div class="title_content">
      <i v-show="can_back" class="fa fa-chevron-left" @click="goBack"></i>
      <p>{{title}}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader_wrap",
  props: {
    can_back: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    }
  }
};
</script>

<style lang="stylus" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  background: $main_gary;
  color: #fff;
  z-index: 100;

  .title_content {
    line-height: 40px;
    color: $main_black;
    font-size: 20px;
    margin: 0 10px;
  }

  .fa {
    position: absolute;
    line-height: 40px;
    padding: 2px 8px;
  }

  p {
    text-align: center;
  }
}
</style>
