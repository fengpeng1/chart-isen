<template>
    <div class="card">
        <div class="card-title"><h1>Classement</h1></div>
        <div class="chip">
            <span class="chip-avatar"><img src="../assets/gold-medal.svg"/></span>
            <span class="chip-name">Milan</span>
            <span class="chip-score">99</span>
        </div>
        <div class="chip">
            <span class="chip-avatar"><img src="../assets/silver-medal.svg"/></span>
            <span class="chip-name">Deuxième</span>
            <span class="chip-score">3</span>
        </div>
        <div class="chip">
            <span class="chip-avatar"><img src="../assets/bronze-medal.svg"/></span>
            <span class="chip-name">Troisième</span>
            <span class="chip-score">0</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Top3"
    }
</script>

<style scoped>

    .card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
        max-width: 300px;
        margin: 2%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card-title {
        padding: 2px 16px;
        margin: 2%;
    }

    .chip{
        display: inline-block;
        padding: 0 25px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-radius: 25px;
        background-color: #f1f1f1;
        margin: 2%;
        width: 75%;
        font-weight: bold;
        text-overflow: ellipsis;
        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
    }

    .chip-avatar{
        float: left;
        margin: 0 10px 0 -25px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    .chip-score{
        float: right;
        margin: 0;
        height: 25px;
        width: 25px;
    }
</style>