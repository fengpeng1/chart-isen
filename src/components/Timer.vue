<template>
<<<<<<< HEAD
    <v-card height="100%" class="widget">
=======
    <div>
>>>>>>> 1fdfc253e84f2657fb5b3d63ba53f06cae28bfd5
        <div class="card-title"><h1>Timer</h1></div>
        <div class="timer">
            {{days}} jours {{hours}}h {{minutes}}m {{seconds}}s
        </div>
<<<<<<< HEAD
    </v-card>

=======
    </div>
>>>>>>> 1fdfc253e84f2657fb5b3d63ba53f06cae28bfd5
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
                if(this.normalizedDate - this.now >=0) {
                    return this.normalizedDate - this.now
                }
                return 0
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

<<<<<<< HEAD
=======
    /*.card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners *//*
        max-width: 300px;
        margin: 2%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }*/

>>>>>>> 1fdfc253e84f2657fb5b3d63ba53f06cae28bfd5
    .card-title {
        padding: 2px 16px;
        margin: 2%;
    }
</style>
