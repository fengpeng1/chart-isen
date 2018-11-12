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
          data: [[1538856000000, [6593.34, 6600, 6582.63, 6600]],
            [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]]
        }
      ]
    };
  }
};
</script>

<style >
</style>

