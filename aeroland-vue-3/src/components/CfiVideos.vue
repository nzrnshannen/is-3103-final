<template>
    <Navbar/>
        <div class="break">
            <br>
        </div>
    
    <div class="cfi-videos-container">
        <div class="cfi-videos-content">
            <div class="cfi-videos-official">
                <h4>CFI Videos</h4>
                <img src="../assets/img/play-button.png">
                <a target="_blank" href="https://www.youtube.com/watch?v=C3Qpi2g7Qbc" style="font-weight:bolder">Official Music Video</a>
            </div>
            <hr>
            <div class="cfi-videos-other">
                <h6>CFI Tutorial Videos</h6>
                <a target="_blank" href="https://www.youtube.com/watch?v=vkwtloIkj4Y" style="font-weight:bold">Online Membership</a> <br>
                <p style="font-weight:bold">Registering to CFI e-Services (<a href="https://www.youtube.com/watch?v=fWRNpE9v3sc" target="_blank">English</a> | <a href="https://www.youtube.com/watch?v=0GhDkVEXLpI" target="_blank" >Bisaya</a> | <a href="https://www.youtube.com/watch?v=QY-oyLebVOg" target="_blank">Tagalog</a>)</p>
                <p style="font-weight:bold">Navigating your CFI e-Services(<a href="https://www.youtube.com/watch?v=pX71TPrD56U" target="_blank">English</a> | <a href="https://www.youtube.com/watch?v=A0Ff-CrHpNs" target="_blank">Bisaya</a> | <a href="https://www.youtube.com/watch?v=EsoHq1B_iXY" target="_blank">Tagalog</a>)</p>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=GvcUp5TOsQs" target="_blank">Navigating your CFI Wallet</a>
                <p style="font-weight:bold">Withdrawing your CFI savings deposit online (<a href="https://www.youtube.com/watch?v=GppLSobR6i0" target="_blank">English</a> | <a href="https://www.youtube.com/watch?v=sWZGpXGH8Po" target="_blank">Bisaya</a>)</p>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=3bj0A2M9sLQ" target="_blank">Using an online payment gateway</a>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=rXFv4TkOOCo" target="_blank">Using CFI Helpdesk</a>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=0QOVBYrgl_s" target="_blank">Using CFI Callcenter</a>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=HM0S_o2ykYg" target="_blank">Download Forms</a>
            </div>
            <hr>
                <div class="cfi-videos-other">
                <h6>General Information</h6>
                <p style="font-weight:bold">Cebu CFI Coop Seminar Video (<a href="https://www.youtube.com/watch?v=-_NX4KXnGoE" target="_blank">English</a> | <a href="https://www.youtube.com/watch?v=0aLWOMNy1Ec" target="_blank">Bisaya</a> | <a href="https://www.youtube.com/watch?v=kVy4f397GX8" target="_blank">Tagalog</a>)</p>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=1JzT5K3QGVQ" target="_blank">The CFI Credit Cash Wallet</a> <br>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=adJ5xuFS0kM" target="_blank">The Personal Advantage Loan</a>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=Okxv_Wbzm0Q" target="_blank">Cebu CFI Community Cooperative proposes to modernized the Carbon Public Market in Cebu City</a>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=PF0lcVRnG1w" target="_blank">Chairman Atty. Winston F. Garcia launches the CFI e-Services</a>
            </div>
            <hr>
            <div class="cfi-videos-other">
                <h6>CFI Vlogs</h6>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=PF0lcVRnG1w" target="_blank">CFI Karon</a> <br>
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=Ofo7fJWwsio" target="_blank">Episode 1 - Ebutang ang CFI sa inyong mga kamot! Register Na!</a> 
                <a style="font-weight:bold" href="https://www.youtube.com/watch?v=s23sTOaqBBk" target="_blank">Episode 2 - CFI Home Page</a>
            </div>

        </div> 
    </div>
    <hr>
    <FooterMain/>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import FooterMain  from '../components/FooterMain.vue';

    export default{
        name: 'CfiVideos',
        components: {
            Navbar,
            FooterMain
        }
}
</script>

<style>
    .break{
        margin-bottom:4rem;
    }

    .cfi-videos-container{
        background-color: rgba(219, 204, 184, 0.199);
        width: 100%;
        padding: 5rem;
    }

    .cfi-videos-content{
        padding: 5rem;
        margin: 5rem;
        background-color: white;
        margin-top: 5rem;
        justify-content: space-evenly;
    }

    .cfi-videos-official{
        padding: 3rem;
    }

    .cfi-videos-other{
        padding: 2rem;
    }

    .cfi-videos-other h6{
        margin-bottom: 1rem;
    }

    .cfi-videos-other p,
    .cfi-videos-other a
    {
        padding: 0.2rem;
    }

    .cfi-videos-official{
        margin-left: -1.5rem;
    }

    .cfi-videos-official a{
        font-size: large;
    }

    .cfi-videos-official a{
        margin-bottom: -0.7rem;
    }

    .cfi-videos-official h4{
        margin-bottom: 2rem;
    }
    img{
        max-width: 2.5%;
        padding: -0.5rem;
        margin-right: 00.5rem;
        margin-top: -0.1rem;
    }

</style>
