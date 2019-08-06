<template>
    <div class="e_chart_wrap has_header">
        <div class="chart1" ref="chart1">
            <EChart01/>
        </div>
        <div class="chart2">eChart2</div>
        <div class="chart3">eChart3</div>
    </div>
</template>

<script>
    import EChart01 from "./chart01"

    export default {
        name: "index",
        components: {
            EChart01
        },

    }
</script>

<style scoped lang="stylus">
    .e_chart_wrap
        padding-left 2%;
        padding-right 2%;

        .chart1
            width 100%
            height 300px
            display flex
            justify-content center
            align-items center
            background-color #efefef

</style>