<template>
    <v-card height="94%" class="widget">
        <vue-event-calendar :events="demoEvents" class="calendar">
        </vue-event-calendar>
    </v-card>
</template>

<script>
    export default {
        name: "Calendar",
        data () {
            return {
                demoEvents: [{
                    date: '2018/11/16', // Required
                    title: 'RDV Client', // Required
                    desc: 'description'
                }]
            }
        }
    }
</script>

<style scoped>
</style>
