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
  position: relative;
}
</style>