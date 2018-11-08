<template>
  <div id="app">
    <chart></chart>
    <chart-circle></chart-circle>
    <chart-area></chart-area>
    <chart-candle></chart-candle>
  </div>
</template>

<script>
import Chart from './components/Chart.vue';
import ChartCircle from './components/ChartCircle.vue';
import ChartArea from './components/ChartArea.vue';
import ChartCandle from './components/ChartCandle.vue';

export default {
  name: 'app',
  components: {
    Chart,
    ChartCircle,
    ChartArea,
    ChartCandle
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
