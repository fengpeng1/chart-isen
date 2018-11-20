<template>
    <v-card height="94%" class="widget">
        <div class="titleprogr"><h3>{{titre}}</h3></div>
      <apexcharts class="apex" width="100%" type="radialBar" :options="options" :series="series"></apexcharts>

      <!--<div class="button">
        <button class="up" @click="progress">Progress</button>
      </div>
      <div class="button">
        <button class="up" @click="regress">Regress</button>
      </div>-->
    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import NodesAPI from '../services/api/Nodes'

export default {
  name: 'Progression',
  components: {
    apexcharts: VueApexCharts
  },
    props: {
        titre: {
            type: String,
            required: true
        }
    },
  data: function() {
    return {
      options: {
          chart: {
              foreColor: '#000000'
          },
          legend:{
              show: false
          },
          dataLabels:{
            enabled: false
          },
          labels:[]
      },
      series: [],
    };
  },
  methods: {
      progress() {
          const newData = this.series.map((value) => {
              if (value <=99){
                  value++;
              }
              return value;
          });
          this.series = newData;
      },
      regress() {
          const newData = this.series.map((value) => {
              if (value >= 1) {
                  value--;
              }
              return value;
          });
          this.series = newData;
      }
  },
    mounted() {
        NodesAPI.getNodes()
            .then(node => {
                var nbConnected = 0;
                for (let o of node) {
                    if (o.isConnected) {nbConnected ++;}
                }
                var percentage = Math.round((100*nbConnected)/Object.keys(node).length);
                this.series.push(percentage);
                this.options.labels.push(nbConnected);
            })
    }
};
</script>

<style scoped>
.titleprogr {
    margin-top: 5%;
}

</style>

