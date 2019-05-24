<template>
  <div class="CssGridWrap has_header">
    <div class="TestContainer">
      <div class="FirstItems">1</div>
      <div class="FirstItems">2</div>
      <div class="FirstItems">3</div>
      <div class="FirstItems">4</div>
      <div class="FirstItems">5</div>
      <div class="FirstItems">6</div>
      <div class="FirstItems">7</div>
      <div class="FirstItems">8</div>
      <div class="FirstItems">9</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.CssGridWrap {
  position: relative;
  background-color: #ddd;

  .TestContainer {
    display: grid;
    grid-template-columns: 40px auto 80px;
    grid-template-rows: repeat(3, 80px); // 重复3
    grid-auto-flow: column; // 先列后行排序
    // grid-column-gap: 20px; //间距
    // grid-row-gap: 40px;
    gap: 40px 10px; // 间距

    .FirstItems {
      background-color: $main_blue;
    }
  }
}
</style>