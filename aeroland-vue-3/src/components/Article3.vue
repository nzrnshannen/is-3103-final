<template>
    <Navbar/>
    <div class="break">
        <br>
    </div>
    <div class="article-3-container">
        <div class="article-3-picture">
            <img src="../assets/img/article3.png">
        </div>
        <div class="article-3-content">
            <h2>CFI Online App is Now Available for Download on Apple Store and Google Play Store!</h2>
            <p>Finally, the CFI Online is now up for download on App Store for IOS and Google Play store for Android. Get ready to stay on top of your CFI account right at your fingertips.</p>
            <p>CFI Coop is the first Philippine cooperative with an online application for coop members, which enables one to transact without having to visit a CFI office or see a CFI personnel.</p>
            <ul style="list-style-type:circle">
                <li>Easily manage funds, view statement of account for your Share Capital, Time Deposit, Savings Deposit, or Loans</li>
                <li>Fund transfer to 54 banks and 12 payment centers nationwide through Instapay and Pesonet</li>
                <li>Commercial credit line drawdown</li>
                <li>View your personal credit line spending, and statements</li>
                <li>Loan repayment</li>
                <li>Bills Payment</li>
                <li>Buy Load</li>
                <li>Application for MMAF transfer, notice of claims, tariff schedule, hospital and clinic LOA, and schedule for a clinic appointment</li>
                <li>Send concerns and inquiries through the Help Desk</li>
                <li>Compute loans through the net proceeds calculator</li>
                <li>Download forms</li>
            </ul>

            <br>
            <p>App Store: <a class="link" href="https://apps.apple.com/us/app/cfi-online/id6444171383">https://apps.apple.com/us/app/cfi-online/id6444171383</a></p>
            <p>Google Play Store: <a class="link" href="https://play.google.com/store/apps/details?id=com.cficoop.online">https://play.google.com/store/apps/details?id=com.cficoop.online</a>  </p>
            
            <p>For more updates, follow us on Facebook @CFICoopOfficialPage, Instagram @cebucficoop.ph, Twitter @CebuCFICoopPH, and on Youtube Channel at CFI COOP.</p>
        </div>
    </div>
    <hr>
    <NewsArticlePreview/>
    <FooterMain/>
</template>

<script>
    import Navbar from './Navbar.vue'
    import NewsArticlePreview from './sections/NewsArticlePreview.vue';
    import FooterMain from './FooterMain.vue';
    export default{
        name: 'Article3',
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
    .article-3-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-3-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-3-picture img{
        margin-top: 3rem;
    }

    div .article-3-container p{
        font-size:medium;
        padding: 0.5rem;
    }

    ul{
        list-style-position: inside;
    }
</style>