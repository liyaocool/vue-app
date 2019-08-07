<template>
    <div class="e_chart_wrap has_header">
        <div class="chart1">
            <EChart01/>
        </div>
        <div class="chart2">
            <EChart02/>
        </div>
<!--        <div class="chart3">-->
<!--            <EChart02/>-->
<!--        </div>-->
    </div>
</template>

<script>
    import EChart01 from "./chart01"
    import EChart02 from "./chart02"

    export default {
        name: "index",
        components: {
            EChart01,
            EChart02
        },

    }
</script>

<style scoped lang="stylus">
    .e_chart_wrap
        padding-left 2%;
        padding-right 2%;

        .chart1, .chart2, .chart3
            width 100%
            height 300px
            display flex
            justify-content center
            align-items center
            background-color #efefef

</style>