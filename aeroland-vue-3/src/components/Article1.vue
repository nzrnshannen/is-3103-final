<template>
    <Navbar />
    <div class="break">
        <br>
    </div>
    <div class="article-1-container">
        <div class="article-1-picture">
            <img src="../assets/img/article1.png">
        </div>
        <div class="article-1-content">
            <h2>Book online; medical consultation with CFI doctor and issuance of letter of authority (LOA)</h2>
            <p>Skip waiting and expect the same quality health care services as you conveniently book online your medical consultation with the CFI doctor and request for issuance of a letter of authority.</p>
            <p>You can now do it using our CFI helpdesk. All you need to do is to follow these steps:</p>
            <ol>
                <li>Download the CFI Online app on Google Play Store and App Store for IOS, search “CFI Online”</li>
                <li>Log in your mobile number and password</li>
                <li>After successful login, click the Help Desk button</li>
                <li>Open ticket, then input your details</li>
                <li>Choose a category</li>
                <li>Clinic appointment ( Appointment with the doctor)</li>
                <li>Hospital or clinic LOA ( Issuance of LOA)</li>
                <li>Attach the doctor's order with the corresponding diagnosis - for issuance of LOA</li>
            </ol>

            <p>You will be notified through text message of your appointment with the doctor, and the issuance of a letter of authority.</p>

            <ol>
                <li>The appointment schedule with the CFI doctor will be forwarded</li>
                <li>The letter of authority will be forwarded directly to the affiliated hospitals or laboratory.</li>
            </ol>

            <p>Go try it now!</p>

            <p style="font-size:medium">For more updates, follow us on Facebook @CFICoopOfficialPage, Instagram @cebucficoop.ph, Twitter @CebuCFICoopPH, and on Youtube Channel at CFI COOP.</p>
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
    .article-1-container{
        display: block;
        align-items: center;
        margin-left: 5rem;
        margin-right: 1rem;
    }

    .article-1-container h2{
        margin-top: 3rem;
        margin-bottom: 3rem;

    }

    .article-1-picture img{
        margin-top: 3rem;
    }

    div .article-1-container p{
        font-size:x-large;
        padding: 1rem;
    }

</style>