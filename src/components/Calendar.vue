<template>
    <vue-event-calendar :events="demoEvents" class="calendar">
    </vue-event-calendar>
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
    .calendar{
        height: 500px;
        width: 1000px;
    }
</style>