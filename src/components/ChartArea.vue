<template>
  <v-card height="94%" class="widget">
   <apexcharts class="apex" width="95%" type="area" :options="options" :series="series"></apexcharts>

  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ChartArea',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-09-19T02:30:00',
            '2018-09-19T03:30:00',
            '2018-09-19T04:30:00',
            '2018-09-19T05:30:00',
            '2018-09-19T06:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
    };
  }
};


</script>

<style scoped>

widget.button {
  float: right;
  vertical-align: center;
}
widget.button.btse {
  vertical-align: center;
}
</style>

