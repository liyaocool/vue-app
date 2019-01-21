<template>
  <div class="MainNav_wrap">
    <ul>
      <li>
        <router-link to>组件</router-link>
      </li>
      <li>
        <router-link to>插件</router-link>
      </li>
      <li>
        <router-link to>样式</router-link>
      </li>
      <li>
        <router-link to>我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainNav_wrap"
};
</script>

<style lang="stylus" scoped>
.MainNav_wrap {
  height: 100%;
  background: $main_blue;
  color #fff;

  ul {
    list-style: none;
    width: 100%;

    li {
      display: inline-block;
      a {
        color #eee;
      }
    }
  }
}
</style>
