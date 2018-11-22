<template>
    <div>
         <BatteryHistoryChart v-if="modalVisible" @close="modalVisible = false" :mac="modalMac" :batteryHistory="modalBatteryHistory"></BatteryHistoryChart>

        <!-- Material Design Icons are not working for now-->
        <v-card height="94%" class="widget">
            <v-data-table height="100%"
                          :headers="headers"
                          :items="nodes"
                          class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-right">{{props.item.mac}}</td>
                    <td class="text-xs-right">{{ props.item.serialnumber }}</td>
                    <td class="text-xs-right">{{ props.item.firmware }}</td>
                    <td class="text-xs-right"><v-btn primary @click="openModal(props.item.mac, JSON.parse(JSON.stringify(props.item.batteryHistory)))">{{ props.item.batterylvl }}</v-btn></td>
                    <td class="text-xs-right">{{ props.item.info }}</td>
                </template>
            </v-data-table>
        </v-card>
    </div>

</template>




<script>
    import NodesAPI from '../services/api/Nodes'
    import Top3 from './Top3'
    import ChartCandle from './ChartCandle'
    import BatteryHistoryChart from './BatteryHistoryChart'

    export default {
        name: "CustomizedTable",
        components:{
          Top3, ChartCandle, BatteryHistoryChart
        },
        data () {
            return {
                headers: [
                    {
                        text: 'MAC Number',
                        align: 'left',
                        sortable: false,
                        value: 'mac'
                    },
                    { text: 'Serial Number', value: 'serialnumber' },
                    { text: 'Firmware', value: 'firmware' },
                    { text: 'Battery Level (%)', value: 'batterylvl' },
                    { text: 'Last Info', value: 'info' },
                ],
                nodes: [],
                modalVisible: false,
                modalMac: null,
                modalBatteryHistory: null
            }
        },
        methods: {
          openModal(mac, batteryHistory) {
              console.log('test')
              this.modalMac = mac
              this.modalBatteryHistory = batteryHistory
              this.modalVisible = true
          }
        },
        mounted() {
            NodesAPI.getNodes()
                .then(node => {
                    for (let o of node){
                        let line = {};
                        line.mac = o.mac;
                        line.serialnumber = o.serialNumber;
                        line.firmware = o.nodeFirmware.description;
                        line.batterylvl = o.batteryLevel;
                        line.info = o.lastInfo;
                        line.batteryHistory = o.batteryHistory
                        this.nodes.push(line);
                    }
                })



        }
    }
</script>

<style scoped>

</style>
