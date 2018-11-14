<template>
    <v-card height="98%" class="widget">
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

    .card-title {
        padding: 2px 16px;
        margin: 2%;
    }

    .title-comment {
        font-style: italic;
    }
</style>
