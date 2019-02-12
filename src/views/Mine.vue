<template>
  <div class="Mine_wrap">
    <ul>
      <li>
        <router-link to>关于我</router-link>
      </li>
      <li>
        <router-link to>其他</router-link>
      </li>
      <li>
        <router-link to="/mine/contact">联系我</router-link>
      </li>
    </ul>
    <MainView></MainView>
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