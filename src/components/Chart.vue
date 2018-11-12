<template>
  <div class="chart">
    <apexcharts v-if="options" class="apex" width="500" type="bar" :options="options" :series="this.series"></apexcharts>
    <div class="button">
      <button class="btse" @click="update">updata</button>
      <input v-model="number" type="number">
      <button @click="change">change</button>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    options: '',
    series: ''
  },
  data: function() {
    return {
      number: []
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

<style >
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

