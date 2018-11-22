<template>
  <v-card height="94%" class="widget">
    <apexcharts class="apex" width="95%" type="area" :options="options" :series="series"></apexcharts>

  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

import NodesAPI from '../services/api/Nodes';

export default {
  name: 'ChartArea',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
        chart: {
          foreColor: '#fff'
        },
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
      legend: {
        show: true
      },
      series: []
    };
  },
  mounted() {
    NodesAPI.getNodeByMac('4e4f0000000014c1').then(node => {
      // console.log(node.batteryHistory)
    });
    this.series = [
      {
        name: 'series1',
        data: [50, 25, 78, 78, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ];
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
.widget {
  background-color: #3c3744;
}
</style>

