<template>
  <v-card height="100%" class="widget">
    <apexcharts class="apex" width="100%" type="bar" :options="options" :series="series"></apexcharts>
    <div class="button">
      <button class="btse" @click="update">updata</button>
      <input v-model="number" type="number">
      <button @click="change">change</button>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      number: [],
      options: {
        chart: {
            foreColor: '#fff',
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    update() {
      const max = 100;
      const min = 0;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
      this.series = [
        {
          data: newData
        }
      ];
    },
    change() {
      const newData = this.series[0].data;
      newData[0] = this.number;

      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};


</script>

<style scoped>

</style>

