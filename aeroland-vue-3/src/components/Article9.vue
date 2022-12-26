<template>
        <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-9-container">
        <div class="article-9-picture">
            <img src="../assets/img/article9.jpg">
        </div>
        <div class="article-9-content">
            <h2>Unionbank PH execs’ courtesy visit to Cebu CFI Coop</h2>
            <p>November  08, 2022 , Cebu City – Unionbank of the Philippines pays a courtesy visit to Cebu CFI Coop Chairman Atty Winston F. Garcia,  Vice President,  Farla Carolyn Garcia, CPA, and CFI Coop Board of Directors.</p>

            <div class="collection-pictures">
                <img src="../assets/img/article9.1.jpg">
                <p class="def">(left) Ramon Duarte, UB ESVP , (right) CFI Coop Chairman, Atty. Winston F. Garcia </p>
                <br>
                <img src="../assets/img/article9.2.jpg">
                <p>The purpose of the meeting is to see possible inventions to support the digitization of the cooperative. Cebu CFI Coop has streamlined projects for the coop members in the advancement of loan programs and firm online facilities.</p>
                <br>
                <img src="../assets/img/article9.3.jpg">
                <p class="def">In photo  (center left ) Ardie Darvin, FVP Transaction Banking Center , (center right )  CFI Coop VP Farla Carolyn Garcia,  (right) Diane Rodriguez, Senior Manager, (right most) Pico Sarmiento , (left most) </p>
                <br>
                <img src="../assets/img/article9.4.jpg">
                <p>Present during the meeting were Unionbank Executives; Ramon Duarte, ESVP, Ardie Darvin, FVP Transaction Banking Center, Pico Sarmiento VP Metro Cebu Sales Director, Pam Pepito, VP, Diane Rodriguez , Senior Manager, Julian Velen, Manager, and  Georgia Andres,Jr. Officer</p>
                <p>Be a member online! Visit us online and click the membership button.</p>
            </div>
        </div>
    </div>
    <br>
    <hr>
    <NewsArticlePreview/>
    <FooterMain/>
</template>

<script>
    import Navbar from "../components/Navbar.vue"
    import FooterMain from "./FooterMain.vue";
    import NewsArticlePreview from "./sections/NewsArticlePreview.vue";

    export default{
        name: 'Article9',
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
    .article-9-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-9-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-9-picture img{
        margin-top: 3rem;
    }

    div .article-9-container p{
        font-size:large;
        padding: 1rem;
    }

    .collection-pictures .def{
        text-align: center;
        font-style: italic;
        font-size: small;
    }

    .collection-pictures img{
        display: block;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

</style>