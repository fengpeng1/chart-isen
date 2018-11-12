<template>
  <div id="app">
    <card><chart></chart></card>
    <card><chart-circle></chart-circle></card>
    <card><chart-area></chart-area></card>
    <card><chart-candle></chart-candle></card>
    <card><top3></top3></card>
    <card><progression></progression></card>
    <card><semi-circle-gauge></semi-circle-gauge></card>
    <card><timer date="Nov 18, 2018 16:00:00"></timer></card>
    <card><calendar></calendar></card>
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
import Calendar from './components/Calendar';
import Card from './components/Card';

export default {
  name: 'app',
  components: {
    Calendar,
    Card,
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
