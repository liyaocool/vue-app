<template>
  <div class="style_wrap has_footer">
    <ul>
      <li>
        <router-link tag="li" :to="item.path" v-for="(item, index) in list" :key="index">
          <el-row :gutter="20">
            <el-col :span="3">
              <div class="grid-content bg-purple text_center">
                <i>{{index + 1}}.</i>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple">
                <span class="item_title">{{item.title}}</span>:
                <span>{{item.content}}</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <span class="el-icon-arrow-right right_arrow"></span>
              </div>
            </el-col>
          </el-row>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "CSS grid布局",
          content: "比Flex布局更好用.",
          path: "cssGrid"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.style_wrap {
  position: relative;

  ul {
    padding: 10px;

    li {
      background-color: $ctrl_color;
      height: 44px;
      line-height: 44px;
      width: 100%;
      border-radius: 2px;
      margin-bottom: 4px;

      .item_title {
        color: $main_orange;
      }

      .right_arrow {
        color: $main_blue;
      }
    }
  }
}
</style>

