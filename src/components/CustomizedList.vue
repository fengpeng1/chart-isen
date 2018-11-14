<template>
    <v-card height="98%" class="widget">
    <!-- Material Design Icons are not working for now-->
        <v-data-table height="100%"
                :hide-headers="true"
                :hide-actions="true"
                :items="desserts"
                class="elevation-1"
                :dark="true"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    export default {
        name: "CustomizedList",
        data () {
            return {
                desserts: [
                    {
                        value: true,
                        name: 'Frozen Yogurt',
                        calories: 159
                    },
                    {
                        value: true,
                        name: 'Ice cream sandwich',
                        calories: 237
                    },
                    {
                        value: true,
                        name: 'Eclair',
                        calories: 262
                    },
                    {
                        value: true,
                        name: 'Cupcake',
                        calories: 305
                    },
                    {
                        value: true,
                        name: 'Gingerbread',
                        calories: 356
                    },
                    {
                        value: true,
                        name: 'Jelly bean',
                        calories: 375
                    },
                    {
                        value: true,
                        name: 'Lollipop',
                        calories: 392
                    },
                    {
                        value: true,
                        name: 'Honeycomb',
                        calories: 408
                    },
                    {
                        value: true,
                        name: 'Donut',
                        calories: 452
                    },
                    {
                        value: true,
                        name: 'KitKat',
                        calories: 518
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
