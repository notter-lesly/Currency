<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

interface ChartProps {
  chartValue: string;
}

const props = defineProps<ChartProps>();

const apexchart = VueApexCharts;

const series = [{ name: "Rates", data: props.chartValue }];
const chartOptions = {
  chart: {
    height: 150,
    type: "line",
    zoom: { enabled: false },
  },
  dataLabels: { enabled: false },
  stroke: { curve: "straight", colors: ["#d9be8f"] },
  title: {
    text: "historical rates for the past 30 days",
    align: "left",
  },
  grid: { row: { colors: ["#31423A"] } },
  xaxis: {
    categories: ["5", "10", "15", "20", "25", "30"],
  },
};
</script>
<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
