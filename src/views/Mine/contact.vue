<template>
  <div class="contact_wrap">
    <main-header :can_back="false" :title="title" @goBack="Back"/>
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
    Back() {
      console.log(this.$route);
    }
  }
};
</script>

<style lang="stylus" scoped>
.contact_wrap {
  padding-top: 44px;
}
</style>