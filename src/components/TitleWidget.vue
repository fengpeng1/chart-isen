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
        font-size: 48px;
        font-weight: bold;
    }
</style>
