<template>
    <div class="main-container">
    <Navbar/>
    <div class="break">
        <br>
    </div>
    <AllArticles />
    </div>
</template>

<script>
    import Navbar from '../Navbar.vue'
    import AllArticles from '../AllArticles.vue'

    export default{
        name: 'ViewAllArticles',
        components:{
            Navbar,
            AllArticles
        },
    }
</script>

<style>
    .break{
        margin-bottom: 15rem;
    }
</style>



