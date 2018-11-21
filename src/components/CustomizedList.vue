<template>
    <v-card height="94%" class="widget">
    <!-- Material Design Icons are not working for now-->
        <v-data-table height="100%"
                :hide-actions="true"
                :headers="headers"
                :items="batteryLevels"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.mac }}</td>
                <td class="text-xs-right">{{ props.item.batteryLevel }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>

    import NodesAPI from '../services/api/Nodes'

    export default {
        name: "CustomizedList",
        data () {
            return {
                headers: [
                    {
                        text: 'MAC Number',
                        align: 'left',
                        sortable: false,
                        value: 'mac'
                    },
                    { text: 'Battery Level (%)', value: 'batteryLevel' }
                ],
                batteryLevels: []
            }
        },
        mounted: function() {
            NodesAPI.getNodes()
                .then(nodes => {
                    let lowBatteries = []
                    for (let i in nodes){
                        if (nodes[i].batteryLevel <=30) {
                            lowBatteries.push({
                                mac: nodes[i].mac,
                                batteryLevel: nodes[i].batteryLevel
                            })
                        }
                    }
                    this.batteryLevels = lowBatteries
                })
        }
    }
</script>

<style scoped>

</style>
