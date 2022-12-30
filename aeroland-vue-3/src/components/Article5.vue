<template>
<Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-5-container">
        <div class="article-5-picture">
            <img src="../assets/img/article5.png">
        </div>
        <div class="article-5-content">
            <h2>CFI Members from State Universities and Colleges, This One is For You!</h2>
            <p>The CFI Salary Auto-Ched is available to members who are employed in state universities and colleges, where repayment of this loan is through salary deductions.</p>
            <p>You can apply for any amount, however , when computing the monthly amortization with the authorized installment period, the Net Take home pay available at the time of the application will be sufficient to cover for its payment.</p>
            <p>The maximum term of the loan  is 60 months.</p>
            <p>Go now and apply! Visit <a href="http://www.cficoop.com">www.cficoop.com</a> for more info</p>
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
        name: 'Article5',
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
    .article-5-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-5-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-5-picture img{
        margin-top: 3rem;
    }

    div .article-5-container p{
        font-size:large;
        padding: 1rem;
    }

    a{
        font-weight: bold;
    }

</style>