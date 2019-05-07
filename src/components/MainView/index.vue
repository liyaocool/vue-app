<template>
  <div :class="{hasHeader:hasHeader, hasFooter:hasFooter,view_wrap:true}">
    <transition :name="trans" mode="out-in">
      <keep-alive v-if="keepAlive">
        <router-view/>
      </keep-alive>
      <router-view v-else/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {
      trans: "page-right"
    };
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    },
    hasHeader() {
      return this.$route.meta.showHeader;
    },
    hasFooter() {
      return this.$route.meta.showFooter;
    }
  },
  watch: {
    $route(to, from) {
      if (from.meta.page < to.meta.page) {
        this.trans = "page-right";
      } else {
        this.trans = "page-left";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.view_wrap {
  height: 100%;
}

.hasHeader {
  padding-top: 44px;
}

.hasFooter {
  padding-bottom: 50px;
}

.page-left-enter, .page-right-leave-active {
  opacity: 0;
  transform: translate(-100%, 0);
}

.page-right-enter, .page-left-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.page-left-enter-active, .page-left-leave-active, .page-right-enter-active, .page-right-leave-active {
  will-change: transform;
  transition: all 200ms;
  position: absolute;
  width: 100%;
}
</style>