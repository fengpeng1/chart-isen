<template>
    <v-card height="94%" class="widget">
        <div class="title"><h3>Responsable des responsables</h3></div>
        <div class="img-container">
            <img src="../assets/pierre_le_bg.jpg"/>
        </div>
        <div class="title-comment">En plus il est tout beau</div>
    </v-card>
</template>

<script>
    export default {
        name: "ImageWidget"
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
