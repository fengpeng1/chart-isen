<template>
    <!-- Material Design Icons are not working for now-->
    <v-card height="94%" class="widget">
        <v-data-table height="100%"
                :headers="headers"
                :items="nodes"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.mac }}</td>
                <td class="text-xs-right">{{ props.item.serialnumber }}</td>
                <td class="text-xs-right">{{ props.item.firmware }}</td>
                <td class="text-xs-right">{{ props.item.batterylvl }}</td>
                <td class="text-xs-right">{{ props.item.info }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>

    import NodesAPI from '../services/api/Nodes'

    export default {
        name: "CustomizedTable",
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
                nodes: []
            }
        },
        mounted() {
            NodesAPI.getNodes()
                .then(node => {
                    for (let o of node){
                        var line = {};
                        line.mac = o.mac;
                        line.serialnumber = o.serialNumber;
                        line.firmware = o.nodeFirmware.description;
                        line.batterylvl = o.batteryLevel;
                        line.info = o.lastInfo;
                        this.nodes.push(line);
                    }

                })
        }
    }
</script>

<style scoped>

</style>
