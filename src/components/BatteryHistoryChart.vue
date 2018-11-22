<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <apexcharts class="apex" width="100%" type="area" :options="options" :series="series"></apexcharts>
                    <v-btn primary dark  @click="$emit('close')">Close</v-btn>
                </div>
            </div>
        </div>
    </transition>
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
                    yaxis: {
                      min: 0,
                      max:100
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

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-container {
        width: 50%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

</style>
