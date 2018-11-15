<template>
    <v-card height="94%" class="widget">
        <div class="title"><h3>Rendez-vous client</h3></div>
        <div class="timer">
            <div class="block">
                <div class="value">{{days | two_digits}}</div>
                <div class="unit">Jours</div>
            </div>
            <div class="block">
                <div class="value">{{hours | two_digits}}</div>
                <div class="unit">Heures</div>
            </div>
            <div class="block">
                <div class="value">{{minutes | two_digits}}</div>
                <div class="unit">Minutes</div>
            </div>
            <div class="block">
                <div class="value">{{seconds | two_digits}}</div>
                <div class="unit">Secondes</div>
            </div>
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
    .widget {
        background-color: #3C3744;
        padding: 10px;
        color: #F5853F;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .timer {
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        max-height: 80%;
        flex: 1 1 auto;
    }

    .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 20%;
    }

    .block .value {
        font-size: 48px;
    }

    .block .unit{
        font-size: 14px;
    }
</style>
