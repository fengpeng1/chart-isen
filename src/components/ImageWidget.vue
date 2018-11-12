<template>
    <v-card height="100%" class="widget">
        <div class="title"><h3>TITRE</h3></div>
        <div>
            <v-img
                :src="require('@/assets/imagejesus.jpg')">
            </v-img>
        </div>
        <div class="title-comment">Petit commentaire</div>
    </v-card>
</template>

<script>
    export default {
        name: "ImageWidget"
    }


</script>

<style scoped>

    .title-comment {
        font-style: italic;
    }
</style>
