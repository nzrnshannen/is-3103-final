<template>
    <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-4-container">
        <div class="article-4-picture">
            <img src="../assets/img/article4.png">
        </div>
        <div class="article-4-content">
            <h2>Fresenius Kidney Care for CFI Members at our Dialysis Center</h2>
            <p>Fresenius  kidney care for CFI members at our dialysis center</p>
            <p>Cebu CFI Community Cooperative is committed to providing quality service for its members, with cutting-edge facilities and the cleanest Dialysis Center, the Philippines’ only cooperative to have an advanced center.</p>
            <p>The Dialysis center is equipped with the most modern and brand-new dialysis machines and is designed to have optimal comfort as patients have their treatments. Amenities include brand-new, state of the art Fresenius hemodialysis machines, private rooms, a personal flat-screen TV, and enjoy your favorite Netflix shows with cushioned dialysis chairs every session.</p>
            <p>We are located on the 3rd floor of Esperanza Garcia Building, Capitol Compound, Cebu City, operating from 8:00AM to 6:00PM, Mondays to Fridays, and 8:30AM to 3:00PM on Saturdays.</p>
            <p>If you wish to have your dialysis treatment with us and want to know, we can take great care of your health. Dial (032) 255-25-25.</p>
    </div>
    </div>
    <hr>
    <NewsArticlePreview/>
    <FooterMain/>
</template>

<script>
    import Navbar from "../components/Navbar.vue"
    import FooterMain from "./FooterMain.vue";
    import NewsArticlePreview from "./sections/NewsArticlePreview.vue";

    export default{
        name: 'Article4',
        components:{
    Navbar,
    NewsArticlePreview,
    FooterMain
        }
    }
</script>

<style>
    .break{
        margin-bottom: 4rem;
    }
    .article-4-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-4-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-4-picture img{
        margin-top: 3rem;
    }

    div .article-4-container p{
        font-size:large;
        padding: 1rem;
    }
</style>