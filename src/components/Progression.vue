<template>
  <div class="card">
    <div class="chart">
      <apexcharts class="apex" width="380" type="radialBar" :options="options" :series="series"></apexcharts>
      <div class="button">
        <button class="up" @click="progress">Progress</button>
      </div>
      <div class="button">
        <button class="up" @click="regress">Regress</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Progression',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
          legend:{
              show: false
          },
          dataLabels:{
            enabled: false
          },
          labels:['Progression']
      },
      series: [80],
    };
  },
  methods: {
      progress() {
          const newData = this.series.map((value) => {
              if (value <=99){
                  value++;
              }
              return value;
          });
          this.series = newData;
      },
      regress() {
          const newData = this.series.map((value) => {
              if (value >= 1) {
                  value--;
              }
              return value;
          });
          this.series = newData;
      }
  }
};
</script>

<style>

  .card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    max-width: fit-content;
    margin: 2%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

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

