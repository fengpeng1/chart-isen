<template>
    <v-card height="100%" class="widget">
        <div class="title"><h3>TITRE</h3></div>
        <div class="card-title"><h1>2018</h1></div>
        <div class="title-comment">Petit commentaire</div>
    </v-card>
</template>

<script>
    export default {
        name: "TitleWidget"
    }
</script>

<style scoped>

    .widget{
        position: relative;
        background-color: #3C3744;
        padding: 10px;
        color: #F5853F;
        min-width: 260px;
    }



    .title {
        float: top;
        margin-top: 15px;
    }

    .card-title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: bold;
        height: auto;
    }

    .title-comment {
        position: absolute;
        text-align: center;
        font-style: italic;
        font-size: 14px;
        left: 50%;
        transform: translate(-50%);
        bottom: 25px;
    }
</style>
