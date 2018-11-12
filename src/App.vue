<template>
  <div id="app">
    <chart :options="options" :series="series"></chart>
    <chart-circle></chart-circle>
    <chart-area></chart-area>
    <chart-candle></chart-candle>
    <!-- <test></test> -->
    <!-- <test2></test2> -->
  </div>
</template>

<script>
import Chart from './components/Chart.vue';
import ChartCircle from './components/ChartCircle.vue';
import ChartArea from './components/ChartArea.vue';
import ChartCandle from './components/ChartCandle.vue';
import Test from './components/Test.vue';
import Test2 from './components/Test2.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Chart,
    ChartCircle,
    ChartArea,
    ChartCandle
    // Test,
    // Test2
  },
  data() {
    return {
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
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
