<template>
    <v-card height="94%" class="widget">
      <apexcharts class="apex" width="95%" type="radialBar" :options="options" :series="series"></apexcharts>
      <div class="button">
        <button class="up" @click="progress">Progress</button>
      </div>
      <div class="button">
        <button class="up" @click="regress">Regress</button>
      </div>
    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Progression',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
          chart: {
              foreColor: '#fff'
          },
          legend:{
              show: false
          },
          dataLabels:{
            enabled: false
          },
          labels:['Progression']
      },
      series: [80],
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
  }
};
</script>

<style scoped>
    .widget {
        background: #3c3744;
    }
</style>

