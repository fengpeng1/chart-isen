<template>
    <v-card height="94%" class="widget" overflow-hidden>
        <apexcharts class="apex" width="100%" type="area" :options="options" :series="series"></apexcharts>
    </v-card>
</template>

<script>

    import VueApexCharts from 'vue-apexcharts';
    export default {
        name: "BatteryHistoryChart",
        components: {
            apexcharts: VueApexCharts
        },
        props: {
          mac: {
              type: String,
              required: true
          },
          batteryHistory: {
              type: Array,
              required:true
          }
        },
        data: function() {
            return {
                options: {
                    chart: {
                        foreColor: '#000000'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        }
                    }
                },
                legend: {
                    show: true
                },
                series: [
                    {
                        name: 'Batterie de ' + this.mac,
                        data: []
                    }
                ],
            };
        },

        mounted(){
            for (let i of this.batteryHistory) {
                let level = {
                    x: i.timeStamp,
                    y: i.level
                }
                this.series[0].data.push(level)
            }
        }
    }
</script>

<style scoped>

</style>
