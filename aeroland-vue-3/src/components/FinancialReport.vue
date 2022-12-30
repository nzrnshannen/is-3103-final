<template>
    <Navbar/>
        <div class="break">
        <br>
        </div>

    <div class="financial-report-container">
        <div class="financial-report-content">
            <div class="financial-report-headline">
                <hr>
                <h1>Financial Report</h1>
                <h5>Finance Group – Financial Statement</h5>
                <p>Our Finance Group – Accounting & Treasury makes sure that proper management of Coop Funds and accurate recording of all our financial transactions are being practiced.</p>
            </div>
            <hr>
            <div class="financial-report-content-2">
                <h6>Consolidated Income Statement 2019</h6>
                <h6>Financial Statement 2019</h6>
                <img src="../assets/img/financial-report-2.jpg">
                <img src="../assets/img/financial-report-2.2.jpg">
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
        name: 'FinancialReport',
        components: {
            Navbar,
            FooterMain
        },

        data(){
            return{
                report:[
                    {
                        text: 'testing financial report'
                    },
                ]
            }
        },
    }
</script>

<style>
    .break{
        margin-bottom: 4rem;
    }

    .financial-report-container{
        background-color: rgba(219, 204, 184, 0.199);
        width: 100%;
        padding: 5rem;
    }

    .financial-report-content{
        background-color: white;
        margin: 5rem;
        padding: 5rem;
        margin-top: 5rem;
        justify-content: space-evenly;
        
    }

    .financial-report-content-2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2rem;
        align-items: center;
    }
    
    .financial-report-content-2 img{
        max-width: 90%;
        position: relative;
        justify-content: center;
        display: grid;
        margin-left: auto;
        margin-right: auto;
    }

    .financial-report-content p{
        padding: 00.5rem;
    }

    .financial-report-content h1{
        margin-bottom: 1.5rem;
    }
    .financial-report-content-2 p,
    .financial-report-content-2 h6{
        padding: 1rem;
        margin-bottom: 0.5rem;
    }

    .financial-report-content-2 h6{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .financial-report-headline{
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
        margin-bottom: 2rem;
    }

    .financial-report-headline h5{
        padding: 0.5rem
    }
</style>