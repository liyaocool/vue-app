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
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: $main_page_bg;
  color: #fff;

  .fa {
    display: block;
    font-size: 20px;
    margin-bottom: 3px;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 50px;

    li {
      margin: 2% 0;
      display: inline-block;
      width: 25%;
      text-align: center;

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
