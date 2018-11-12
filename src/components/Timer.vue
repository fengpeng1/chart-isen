<template>
    <v-card height="100%" class="widget">
        <div class="card-title"><h1>Timer</h1></div>
        <div class="timer">
            {{days}} jours {{hours}}h {{minutes}}m {{seconds}}s
        </div>
    </v-card>

</template>

<script>
    export default {
        name: "Timer",
        mounted() {
            window.setInterval(() => {
                this.now = new Date().getTime();
            },1000);
        },
        data: function () {
            return {
                now: new Date().getTime()
            }
        },
        props: {
            date: {
                type: String,
                required: true
            }
        },
        computed: {
            normalizedDate: function () {
                return new Date(this.date).getTime()
            },
            distance: function () {
                return this.normalizedDate - this.now
            },
            days: function () {
                return Math.floor(this.distance / (1000 * 60 * 60 * 24))
            },
            hours: function () {
                return Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            },
            minutes: function () {
                return Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
            },
            seconds: function () {
                return Math.floor((this.distance % (1000 * 60)) / 1000)
            }
        }
    }
</script>

<style scoped>

    .card-title {
        padding: 2px 16px;
        margin: 2%;
    }
</style>
