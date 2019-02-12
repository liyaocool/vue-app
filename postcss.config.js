module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 37.5, //图纸375px分辨率
      unitPrecision: 5, // 最小精度，小数点位数
      propList: ["*"], // !忽略转换项目
      selectorBlackList: [],
      minPixelValue: 2 //替换的最小像素值
    }
  }
}