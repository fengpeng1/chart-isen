<template>
<<<<<<< HEAD
  <v-card height="94%" class="widget">
    <apexcharts class="apex" width="95%" type="area" :options="options" :series="series"></apexcharts>

=======
  <v-card height="94%" class="widget" overflow-hidden>
      <apexcharts class="apex" width="100%" type="area" :options="options" :series="series"></apexcharts>
>>>>>>> f2927186bca1deb5382852cde2d3dd55456da0b6
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
<<<<<<< HEAD
        chart: {
          foreColor: '#fff'
        },
=======
          chart: {
              foreColor: '#000000'
          },
>>>>>>> f2927186bca1deb5382852cde2d3dd55456da0b6
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime'
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
<<<<<<< HEAD
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
=======
    mounted() {



      //Création d'un objet Batterie avec index + objet item qui groupe tout les x: temps et y :niveau de batterie
      NodesAPI.getNodes()
          .then(node => {
              //Création de la DATA
              let Graph = [];
              for (let item of node){
                  var batterie = {};
                  batterie.name = "Serie";
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
          })



    }
>>>>>>> f2927186bca1deb5382852cde2d3dd55456da0b6
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
<<<<<<< HEAD
.widget {
  background-color: #3c3744;
}
=======


>>>>>>> f2927186bca1deb5382852cde2d3dd55456da0b6
</style>

