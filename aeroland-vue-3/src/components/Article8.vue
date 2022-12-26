<template>
    <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-8-container">
        <div class="article-8-picture">
            <img src="../assets/img/article8.png">
        </div>
        <div class="article-8-content">
            <h2>CFI Deposit Loan</h2>
            <p>The ideal loan to get the cash you need! The CFI deposit loan is extended to members who are not employed but receive income from their monthly investments.</p>
            <p>The loanable amount shall not go beyond the maximum limit set by the COOP for the installment period after considering the payment of principal, interest, LRI, and hospital care premiums.</p>
            <p>The loan installment period of the Deposit Loan is a maximum of 60 months.</p>
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
        name: 'Article8',
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
    .article-8-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-8-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-8-picture img{
        margin-top: 3rem;
    }

    div .article-8-container p{
        font-size:large;
        padding: 1rem;
    }

</style>