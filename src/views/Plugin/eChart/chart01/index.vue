<template>
    <div class="chart_wrap" ref="chart"></div>
</template>

<script>
    //按需引入echarts
    //可以按需引入的模块列表见 https://github.com/ecomfe/echarts/blob/master/index.js
    import echarts from "echarts/lib/echarts" //引入主模块
    import "echarts/lib/chart/bar" //引入柱状图
    import "echarts/lib/component/tooltip" //引入提示框
    import "echarts/lib/component/title" //引入标题

    export default {
        name: "index",
        data() {
            return {
                chart: null,
                option: {},
                myData: [],
                timer1:null
            }
        },
        watch: {
            myData() {
                console.log(this.myData);
                this.initEChart()
            }
        },
        mounted() {
            this.initEChart();
            this.change();
        },
        destroyed() {
            this.timer1 = null;
            clearInterval(this.timer1)
        },
        methods: {
            initEChart() {
                this.option = {
                    title: {
                        text: 'ECharts 柱状图示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: this.myData
                    }]
                };
                let chart_dom = this.$refs.chart;
                this.chart = echarts.init(chart_dom);
                this.chart.setOption(this.option);
                window.addEventListener("resize", this.chart.resize);
            },

            change() {
                this.timer1 = setInterval(() => {
                    let rate = (Math.random() * 10).toFixed(0);
                    this.myData = [10 * rate, 20 * rate, 23 * rate, 8 * rate, 24 * rate,20 * rate]
                    // console.log(this.myData)
                }, 2000);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .chart_wrap
        width 100%
        height 100%
</style>