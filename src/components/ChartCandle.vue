<template>
  <div class="chart">
    <apexcharts height="350" type="candlestick" :options="options" :series="series"></apexcharts>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ChartCandle',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
      series: [
        {
          data: []
        }
      ]
    };
  }
};
</script>

<style >
</style>

