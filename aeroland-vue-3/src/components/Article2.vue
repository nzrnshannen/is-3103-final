<template>
    <Navbar />
    <div class="break">
        <br>
    </div>

    <div class="article-2-container">
        <div class="article-2-picture">
            <img src="../assets/img/article2.png">
        </div>
        <div class="article-2-content">
            <h2>
                Plant Festival Queen 2022 Mutya ng Mayana Visits CFI Before the Coronation Night
            </h2>

            <p>Plant Festival Queen 2022 Mutya ng Mayana visits CFI before the coronation night</p>
            <p>Candidates of the Plant Festival Queen 2022: Mutya ng Mayana pays a courtesy visit to Cebu CFI Coop Chairman Atty. Winston F. Garcia, with Board of Director, Atty. Manolette F.Dinsay and Atty. Jay-R Lim.</p>

            <p>Support your candidate for this year's search. The coronation night will be held at Esperanza Hall of Cebu CFI Community Cooperative in Cebu City at 8:00 PM on November 26, 2022</p>

            <p>For more updates, follow us on Facebook @CFICoopOfficialPage, Instagram @cebucficoop.ph, Twitter @CebuCFICoopPH, and on Youtube Channel at CFI COOP.</p>
        </div>

        <div class="pictures">
            <img src="../assets/img/article2.1.png">
            <img src="../assets/img/article2.3.png">
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
        name: 'Article1',
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

    .article-2-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-2-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-2-picture img{
        margin-top: 3rem;
    }

    div .article-2-container p{
        font-size:medium;
        padding: 1rem;
    }

    hr{
        margin-top: 10rem;
    }

</style>