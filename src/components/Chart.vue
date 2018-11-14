<template>
  <div class="chart">
    <apexcharts class="apex" width="500" type="bar" :options="options" :series="series"></apexcharts>
    <div class="button">
      <button class="btse" @click="update">updata</button>
      <input v-model="number" type="number">
      <button @click="change">change</button>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import axios from 'axios';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      number: [],
      options: '',
      series: ''
    };
  },
  mounted() {
    this.getChartInfo();
  },
  methods: {
    getChartInfo() {
      axios.get('/chart.json').then(this.getChartInfoSucc);
    },
    getChartInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.options = res.data.options;
        this.series = res.data.series;
      }
    },
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
.chart {
  display: flex;
}
chart.apex {
  float: left;
}
chart.button {
  float: right;
  vertical-align: center;
}
chart.button.btse {
  vertical-align: center;
}
</style>

