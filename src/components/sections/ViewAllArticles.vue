<template>
    <div class="main-container">
    <Navbar/>
    <div class="break">
        <br>
    </div>
    <div class="news-header">
        <h1>News Articles</h1>
        <p>This section contains various up-to-date news.</p>
    </div>
    <hr>

    <AllArticles />

    <FooterMain />
    </div>
</template>

<script>
    import Navbar from '../Navbar.vue'
    import AllArticles from '../AllArticles.vue'
    import FooterMain from '../FooterMain.vue'
    export default{
        name: 'ViewAllArticles',
        components:{
         Navbar,
         AllArticles,
         FooterMain,

},
    }
</script>

<style>
    .break, .news-header, hr{
        margin-bottom: 4rem;
    }

    .news-header{
        text-align: center;
        margin-top: 5rem;
    }

    html{
        scroll-behavior:smooth;
    }

</style>



