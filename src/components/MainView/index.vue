<template>
  <div class="view_wrap">
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