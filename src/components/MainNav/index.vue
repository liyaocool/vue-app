<template>
  <div class="MainNav_wrap" v-show="showFooter">
    <div class="footer-nav">
      <router-link :to="item.path" v-for="(item, index) in list" :key="index">
        <i :class="item.icon" class="icon_item"></i>
        <p class="nav_title">{{item.title}}</p>
      </router-link>
      <span class="move"></span>
    </div>
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
  },
  computed: {
    showFooter() {
      return this.$route.meta.showFooter;
    }
  }
};
</script>

<style lang="stylus" scoped>
.MainNav_wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #fff;
  box-shadow: 0 1px 2px #ddd;

  .footer-nav {
    position: relative;
    width: 100%;
    height: 50px;

    a {
      position: relative;
      display: inline-block;
      width: 25%;
      text-align: center;
      height: 100%;
      line-height: 50px;
      color: rgba(226, 199, 158, 0.7);

      .icon_item {
        display: block;
        padding: 2px;
        font-size: 24px;
      }

      .nav_title {
        display: block;
        padding: 2px;
        font-size: 12px;
        line-height: 12px;
      }
    }

    a.actived {
      color: $main_orange;
    }

    .move {
      position: absolute;
      display: inline-block;
      width: 25%;
      height: 3px;
      background-color: $main_orange;
      bottom: 0;
      transition: left 0.2s ease-in-out;
    }

    a:nth-child(1).actived~.move {
      left: 0;
    }

    a:nth-child(2).actived~.move {
      left: 25%;
    }

    a:nth-child(3).actived~.move {
      left: 50%;
    }

    a:nth-child(4).actived~.move {
      left: 75%;
    }
  }
}
</style>
