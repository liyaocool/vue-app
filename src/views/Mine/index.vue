<template>
  <div class="Mine_wrap">
    <ul>
      <li>
        <router-link to="/mine/contact">联系我们 二级页面</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      title: "我的"
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.Mine_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>