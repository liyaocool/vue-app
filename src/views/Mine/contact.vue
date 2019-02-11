<template>
  <div class="contact_wrap">
    <main-header :can_back="true" :title="title"/>
    <p>联系我 123456</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      title: "联系我"
    };
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
.contact_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding-top: 44px;
}
</style>