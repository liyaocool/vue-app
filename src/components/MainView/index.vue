<template>
  <div class="view_wrap">
    <transition :name="trans">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition :name="trans">
      <router-view v-if="!$route.meta.keepAlive"/>
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
  transform: translate(-100%, 0);
}

.page-right-enter, .page-left-leave-active {
  transform: translate(100%, 0);
}

.page-left-enter-active, .page-left-leave-active, .page-right-enter-active, .page-right-leave-active {
  transition: transform 0.3s;
}
</style>