<template>
  <div ref="wrapper" class="wrapper has_header">
    <ul ref="content" class="content">
      <li v-for="(item, index) in list" :key="index" @click="checkDetails(item)">
        <span>{{item.time}}</span>
        <span>{{item.amount}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData().then(length => {
      this.$nextTick(() => {
        this.initScroll(length);
      });
    });
  },
  methods: {
    async getData() {
      this.list = [
        {
          time: "今日收益",
          amount: 1512
        },
        {
          time: 2,
          amount: 871
        },
        {
          time: 3,
          amount: 121212
        },
        {
          time: 4,
          amount: 879
        },
        {
          time: 5,
          amount: 1841
        },
        {
          time: 6,
          amount: 123
        },
        {
          time: 7,
          amount: 123
        },
        {
          time: 8,
          amount: 123
        },
        {
          time: 123,
          amount: 54134
        }
      ];
      return this.list.length;
    },
    //初始化better-scroll
    initScroll(length) {
      let width = length * 80;
      this.$refs.content.style.width = `${width}px`;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    //查看详情
    checkDetails(item) {
      this.$notify({
        title: "成功",
        message: item.amount,
        type: "success"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  position: relative;
  height: 50px;
  width: 100%;
  background-color: #eee;
  overflow: hidden;

  .icon {
    width: 30px;
    height: 30px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .content {
    display: flex;
    align-items: center;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 80px;
      height: 40px;
      margin: 0 2px;
      text-align: center;
      background-color: #ccc;
      border-radius: 2px;

      &:first-child {
        background-color: $main_color;
      }
    }
  }
}
</style>