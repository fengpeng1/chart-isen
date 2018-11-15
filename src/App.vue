<template>
  <v-app id="app">
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./assets/imagejesus.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense id="listnav">
        <v-divider></v-divider>

        <v-list-tile
                v-for="item in items"
                :key="item.title"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex md3><title-widget></title-widget></v-flex>
          <v-flex md3><image-widget></image-widget></v-flex>
          <v-flex md3><timer date="Nov 16, 2018 16:00:00"></timer></v-flex>
          <v-flex md3><top3></top3></v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6>
            <v-flex md12><chart-area></chart-area></v-flex>
            <v-layout row wrap>
              <v-flex md6><progression></progression></v-flex>
              <v-flex md6><chart-circle></chart-circle></v-flex>
            </v-layout>
          </v-flex>
          <v-flex md6><calendar></calendar></v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6><chart></chart></v-flex>
          <v-flex md6><chart-candle></chart-candle></v-flex>
        </v-layout>
          <v-layout row wrap>
            <v-flex md9><customized-table data-app></customized-table></v-flex>
            <v-flex md3><customized-list></customized-list></v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
import TitleWidget from "./components/TitleWidget";
import ImageWidget from "./components/ImageWidget";
import Calendar from './components/Calendar';
import Card from './components/Card';
import CustomizedTable from './components/CustomizedTable'
import CustomizedList from './components/CustomizedList'

export default {
  name: 'app',
  components: {
      ImageWidget,
      TitleWidget,
      Calendar,
      Card,
      Chart,
      ChartCircle,
      ChartArea,
      ChartCandle,
      Top3,
      Progression,
      SemiCircleGauge,
      Timer,
      CustomizedTable,
      CustomizedList
  },
  data () {
      return {
          drawer: true,
          items: [
              { title: 'Element 1' },
              { title: 'Element 2' }
          ],
          right: null
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

}

.widget{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  margin: 2%;
}

.widget:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

</style>
