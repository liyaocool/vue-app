<template>
    <div class="chart_wrap" ref="chart"></div>
</template>

<script>
    //按需引入echarts
    //可以按需引入的模块列表见 https://github.com/ecomfe/echarts/blob/master/index.js
    import echarts from "echarts/lib/echarts" //引入主模块
    import "echarts/lib/chart/pie" //引入柱状图
    import "echarts/lib/component/tooltip" //引入提示框
    import "echarts/lib/component/title" //引入标题

    export default {
        name: "index",
        data() {
            return {
                chart: null,
                option: {},
                myData: [],
                timer1: null
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
                        text: 'ECharts 饼状图示例'
                    },
                    radius: "40%",
                    name: "访问来源",
                    tooltip: {},
                    series: [{
                        name: '销量',
                        type: 'pie',
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
                    this.myData = [
                        {value: 10 * (Math.random() * 10).toFixed(0), name: '视频广告'},
                        {value: 10 * (Math.random() * 10).toFixed(0), name: '联盟广告'},
                        {value: 10 * (Math.random() * 10).toFixed(0), name: '邮件营销'},
                        {value: 10 * (Math.random() * 10).toFixed(0), name: '直接访问'},
                        {value: 10 * (Math.random() * 10).toFixed(0), name: '搜索引擎'}
                    ]
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