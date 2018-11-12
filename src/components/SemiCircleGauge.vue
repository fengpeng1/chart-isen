<template>
  <div class="chart">
    <apexcharts class="apex" width="380" type="radialBar" :options="options" :series="series"></apexcharts>
    <div class="button">
      <button class="up" @click="progress">Progress</button>
    </div>
    <div class="button">
      <button class="up" @click="regress">Regress</button>
    </div>
  </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: 'SemiCircleGauge',
        components: {
            apexcharts: VueApexCharts
        },
        data: function() {
            return {
                options: {
                    plotOptions: {
                        radialBar: {
                            startAngle: -135,
                            endAngle: 135,
                            dataLabels: {
                                name: {
                                    fontSize: '16px',
                                    color: undefined,
                                    offsetY: 120
                                },
                                value: {
                                    offsetY: 76,
                                    fontSize: '22px',
                                    color: undefined
                                }
                            }
                        }
                    },
                    series: [67],
                    labels: ['Progression'],
                },
                series: [95]
            };
        },
        methods: {
            progress() {
                this.series = this.series.map((value) => {
                    if (value <=99){
                        value++;
                    }
                    return value;
                });
            },
            regress() {
                this.series = this.series.map((value) => {
                    if (value >= 1) {
                        value--;
                    }
                    return value;
                });
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

