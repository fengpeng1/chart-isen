<template>
    <!-- Material Design Icons are not working for now-->
    <v-card height="94%" class="widget">
        <v-data-table height="100%"
                :headers="headers"
                :items="nodes"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>
                    <template>
                        <div class="text-xs-center">
                            <v-dialog v-model="dialog" width="500">
                                <v-btn slot="activator" color="red lighten-2" dark>
                                    {{ props.item.mac }}
                                </v-btn>
                                <v-card height="94%" class="widget" overflow-hidden>
                                    <v-card-title class="headline grey lighten-2" primary-title>
                                        Pourcentage de Batterie
                                    </v-card-title>
                                    <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>
                                </v-card>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" flat @click="dialog = false">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-dialog>
                        </div>
                    </template>
                </td>
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
                nodes: [],
                dialog: false
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
