<template>
    <v-card height="94%" class="widget">
        <div class="title"><h3>{{title}}</h3></div>
        <div class="img-container">
            <img v-bind:src="imgpath"/>
        </div>
        <div class="title-comment">{{comment}}</div>
    </v-card>
</template>

<script>
    export default {
        name: "ImageWidget",
        data: function () {
            return {
                now: new Date().getTime()
            }
        },
        props: {
            title: {
                type: String
            },
            imgpath: {
                type: String
            },
            comment: {
                type: String
            }
        },
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

    .img-container {
        min-width: 0;
        min-height: 0;
    }

    img {
        max-width: 40%;
        height: auto;
    }
</style>
