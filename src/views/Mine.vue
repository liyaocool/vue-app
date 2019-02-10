<template>
  <div class="Mine_wrap">
    <main-header :can_back="false" :title="title" @goBack="Back"/>

    <ul>
      <li>
        <router-link to>关于我</router-link>
      </li>
      <li>
        <router-link to>其他</router-link>
      </li>
      <li>
        <router-link to="contact">联系我</router-link>
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
  methods: {
    Back() {
      console.log(this.$route);
    }
  }
};
</script>

<style lang="stylus" scoped>
.Mine_wrap {
  padding-top: 44px;
}
</style>