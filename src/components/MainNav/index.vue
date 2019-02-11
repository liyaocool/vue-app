<template>
  <div class="MainNav_wrap">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="item.path">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainNav_wrap",
  data() {
    return {
      list: [
        {
          icon: "fa fa-home",
          title: "首页",
          path: "/home"
        },
        {
          icon: "fa fa-plus-circle",
          title: "插件",
          path: "/plugin"
        },
        {
          icon: "fa fa-css3",
          title: "样式",
          path: "/style"
        },
        {
          icon: "fa fa-user",
          title: "我的",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.MainNav_wrap {
  height: 100%;
  background: $main_gary;
  color: #fff;

  .fa {
    display: block;
    font-size: 24px;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 100%;

    // margin: 10px auto;
    li {
      display: inline-block;
      width: 25%;
      text-align: center;
      margin: 10px 0;

      a {
        width: 100%;
        color: $main_black;
        font-size: 14px;
      }

      a.actived {
        color: $main_orange;
      }
    }
  }
}
</style>
