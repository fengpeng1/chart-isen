<template>
  <v-card height="98%" class="widget">
    <apexcharts class="apex" width="100%" type="pie" :options="options" :series="series"></apexcharts>
    <div class="button">
      <button class="up" @click="update">update</button>
    </div>
  </v-card>
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

<style scoped>
.up {
  background: #eee;
  border: 0;
  position: relative;
}

widget.button {
  float: right;
  vertical-align: center;
}
widget.button.btse {
  vertical-align: center;
}
</style>

