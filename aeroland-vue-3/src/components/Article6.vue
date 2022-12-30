<template>
    <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-6-container">
        <div class="article-6-picture">
            <img src="../assets/img/article6.png">
        </div>
        <div class="article-6-content">
            <h2>Cash in funds to your CFI wallet through Debit cards powered by Visa and Mastercard</h2>
            <p>Can you deposit funds to your CFI wallet through a debit card?</p>
            <p>Yes, you can do it at the tip of your fingers. Depositing funds from your debit card is simple and instant- you only need to select the card type ( Visa or Mastercard), card number, expiry date, and security code.</p>
            <p>Once you've used a card once, you can save it to your account for future use through the My Payee.</p>
            <p>For many, it is more convenient to bring cards or a checkbook. Using your CFI Online is also easier and faster than writing a check.</p>
            <p>Once the amount is credited to your wallet balance, you can transfer it to your  Savings Account or Time Deposit; you can pay your CFI outstanding balances; you can settle your monthly dues with the CFI Bills Payment or send it to your friend's bank account.</p>
            <p>The CFI Online was conceptualized to expand our services to the coop member, achieving simplicity and convenience.</p>
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
        name: 'Article6',
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
    .article-6-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-6-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-6-picture img{
        margin-top: 3rem;
    }

    div .article-6-container p{
        font-size:large;
        padding: 1rem;
    }

</style>