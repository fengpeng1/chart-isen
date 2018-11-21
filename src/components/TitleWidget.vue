<template>
    <v-card height="94%" class="widget">
        <div class="title"><h3>{{title}}</h3></div>
        <div class="card-title"><h1>{{tpsmoyen}}</h1></div>
        <div class="title-comment">{{comment}}</div>
    </v-card>
</template>

<script>

    import OtasAPI from "../services/api/Otas"

    export default {
        name: "TitleWidget",
        data: function () {
            return {
                tpsmoyen: ''
            }
        },
        props: {
            title: {
                type: String
            },
            comment: {
                type: String
            }
        },
        mounted() {
            var tpstotal = 0;
            OtasAPI.getNonActiveOtas()
                .then(ota =>  {
                    for (let o of ota){
                        var time = {
                            end: new Date(o.endTime),
                            start: new Date(o.startTime)
                        };
                        if (time.end.getHours() != time.start.getHours()) {
                            if (time.end.getMinutes() < time.start.getMinutes()) {
                                tpstotal += time.start.getMinutes() - time.end.getMinutes();
                            }
                            else {
                                tpstotal += 60*(time.end.getHours() - time.start.getHours()) + (time.end.getMinutes() - time.start.getMinutes());
                            }

                        }
                        else {
                            tpstotal += time.end.getMinutes() - time.start.getMinutes();
                        }
                        console.log(tpstotal);

                    }
                    tpstotal = tpstotal / Object.keys(ota).length;
                    this.tpsmoyen = tpstotal.toString() + ' min';
                });


        }
    }
</script>

<style scoped>

    .widget {
        background-color: #3C3744;
        padding: 10px;
        color: #F5853F;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card-title {
        font-size: 35px;
        font-weight: bold;
    }
</style>
