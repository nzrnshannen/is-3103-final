<template>
    <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-7-container">
        <div class="article-7-picture">
            <img src="../assets/img/article7.png">
        </div>
        <div class="article-7-content">
            <h2>CFI Salary APDS DepEd Loan</h2>
            <p>The ATM DEPED Salary loan for members where payment of the loan through payroll deduction, allowing CFI to debit the amount directly through his bank account where he receives his salary.</p>
            <p>Interested members can apply for any amount to be borrowed, however, computing its monthly amortization with the net take-home pay at the time of application will be sufficient to cover its payment.</p>
            <p>The maximum loan term for the ATM Deped salary loan is 60 months.</p>
            <p>The application can be made in less than 5 minutes, and approval is fast!</p>
            <p>Apply now online at www.cficoop.com or send a message to our Help Desk, dial 255-2525</p>
            <p>For more updates, follow us on Facebook @CFICoopOfficialPage, Instagram @cebucficoop.ph, Twitter @CebuCFICoopPH, and on Youtube Channel at CFI COOP.</p>
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
        name: 'Article7',
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
    .article-7-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-7-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-7-picture img{
        margin-top: 3rem;
    }

    div .article-7-container p{
        font-size:large;
        padding: 1rem;
    }
    
</style>