<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

interface ChartProps {
  currencyValue: number[];
}

const props = defineProps<ChartProps>();

const apexchart = VueApexCharts;

const series = [
  {
    name: "Rates",
    data: createSeries(props.currencyValue),
  },
];

const chartOptions = {
  chart: {
    type: "line",
    zoom: { enabled: false },
    width: "auto",
  },
  dataLabels: { enabled: false },
  stroke: { curve: "straight", colors: ["#d9be8f"] },
  title: {
    text: "Historical rates for the past 30 days",
    align: "left",
  },
  grid: { row: { colors: ["#31423A"] } },
  xaxis: {
    type: "numeric",
  },
};

function createSeries(chartValue: number[]) {
  const series = [];
  for (let i = 1; i <= 30; i++) {
    series.push([i, chartValue[i - 1]]);
  }
  return series;
}
</script>
<template>
  <div id="chart">
    <apexchart
      type="line"
      height="300"
      widht="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
#chart {
  height: 350px;
  width: fit-content;
  margin-top: 1rem;
}
</style>
