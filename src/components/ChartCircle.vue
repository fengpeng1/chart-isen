<template>
  <div class="chart">
    <apexcharts class="apex" width="380" type="pie" :options="options" :series="series"></apexcharts>
    <div class="button">
      <button class="up" @click="update">update</button>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ChartCircle',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {},
      series: [90, 55, 41, 17, 15]
    };
  },
  methods: {
    update() {
      const max = 100;
      const min = 10;
      const newData = this.series.map(() => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
      this.series = newData;
    }
  }
};
</script>

<style>
.up {
  background: #eee;
  border: 0;
  position: relative;
}
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

