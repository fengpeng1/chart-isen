<template>
  <div id="app">
    <chart></chart>
    <chart-circle></chart-circle>
    <chart-area></chart-area>
    <chart-candle></chart-candle>
    <top3></top3>
    <progression></progression>
    <semi-circle-gauge></semi-circle-gauge>
    <timer date="Nov 16, 2018 16:00:00"></timer>
  </div>
</template>

<script>
import Chart from './components/Chart.vue';
import ChartCircle from './components/ChartCircle.vue';
import ChartArea from './components/ChartArea.vue';
import ChartCandle from './components/ChartCandle.vue';
import Top3 from './components/Top3';
import Progression from './components/Progression';
import SemiCircleGauge from './components/SemiCircleGauge';
import Timer from './components/Timer';

export default {
  name: 'app',
  components: {
    Chart,
    ChartCircle,
    ChartArea,
    ChartCandle,
    Top3,
    Progression,
    SemiCircleGauge,
    Timer
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
