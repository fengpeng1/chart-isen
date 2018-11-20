<template>
  <v-card height="94%" class="widget">
    <apexcharts class="apex" width="95%" type="pie" :options="options" :series="series"></apexcharts>
    <!--<div class="button">
      <button class="up" @click="update">update</button>
    </div>-->
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

import NodesAPI from '../services/api/Nodes'

export default {
  name: 'ChartCircle',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {},
      series: []
    };
  },
    mounted: function() {
        NodesAPI.getNodes()
            .then(nodes => {
                let nodesFirmwares = []
                let firmwares = []
                let labels = []
                for (let i in nodes) {
                    nodesFirmwares.push(nodes[i].nodeFirmware.filename)
                }
                let counts = {};
                nodesFirmwares.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
                Object.keys(counts).map(function(objectKey) {
                    firmwares.push(counts[objectKey]);
                    labels.push(objectKey)
                });
                this.options = {
                    chart: {
                        foreColor: '#fff'
                    },
                    labels: labels
                }
                this.series = firmwares
            })
    }/*,
  methods: {
    update() {
      const max = 100;
      const min = 10;
      const newData = this.series.map(() => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
      this.series = newData;
    }
  }*/
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

  .widget {
    background: #3c3744;
  }
</style>

