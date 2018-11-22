<template>
  <v-card height="94%" class="widget" overflow-hidden>
    <apexcharts class="apex" width="100%" type="area" :options="options" :series="series"></apexcharts>
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
          foreColor: '#000000'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime'
        },
          yaxis: {
            min: 0,
              max: 100
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
    //Création d'un objet Batterie avec index + objet item qui groupe tout les x: temps et y :niveau de batterie
    NodesAPI.getNodes().then(node => {
      //Création de la DATA
      let Graph = [];
      for (let item of node) {
        var batterie = {};
        batterie.name = 'Serie';
        batterie.data = [];
        for (let o of item.batteryHistory) {
          let item = {};
          item.x = o.timeStamp;
          item.y = o.level;
          batterie.data.push(item);
        }
        Graph.push(batterie);
      }
      this.series = Graph;
    });
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

