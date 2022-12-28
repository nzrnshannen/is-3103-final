<template>
    <Navbar />
    <div class="break">
        <br>
    </div>

    <div class="microfinance-loans-container">
        <div class="microfinance-loans-content">
            <div class="microfinance-loans-content-img">
                <img src="../assets/img/microfinance.jpg" style="max-width:100%">
            </div>
        <div class="microfinance-loans-description">
            <h3>Micro Finance Loans</h3>
            <p>These are loans to fund the live lihood business of a member. These businesses are normally what we call as micro SMEs or SMEs that a member is engaged as a source of livelihood for his family. CFI has presently 2 classes of micro financing available for its members:</p>
            <hr>
        </div>
        <div class="microfinance-loans-classes">
            <img src="../assets/img/micro-credit-ewallet.svg">
            <h6>MicroCredit E-wallet</h6>
            <p>This is a revolving and renewable credit line that a member can draw from tome time through a virtual card. Only the amount drawn is considered a loan payable in 12 equal installments with the latest drawdown as the period to be reckoned with to determine the installment schedule. As a result, balances on the previous drawdowns will be carried over to the new drawdown, and their term will be renewed and made to coincide with the period of the new one. As a revolving renewable credit line, payments on the principal loan will restore the line up to the extent of the principal repayment.</p>
            <p>A feature of this virtual card is the convenience of receiving the proceeds of the drawdown in one’s virtual card which the holder can withdraw or make transfers through any of the banks in the PesoNEt network of the Central Bank or in any of the payment outlets in the country such as MLhuillier, Palawan, RD Pawnshop and many more. He also has the convenience of paying his loan through these outlets.</p>
        </div>
        <hr>
        <div class="microfinance-loans-classes">
            <img src="../assets/img/trike-livelihood-loan-program.svg">
            <h6>Trike Livelihood Loan Program</h6>
            <p style="margin-bottom:4rem">This is a loan program extended to members intending to use tricycle motor vehicles for their main source of livelihood. Under this program, the CFI will fund the purchase of a tricycle cab ready for use as public transportation or delivery vehicle, which the borrowing member can pay in equal installments up to 5 years. The downpayment required of the member is very affordable as to be negligible.</p>
        </div>
        </div>
    </div>
    <br>
    <hr>
    <FooterMain/>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import FooterMain  from '../components/FooterMain.vue';

    export default{
        name: 'MicrofinanceLoans',
        components: {
            Navbar,
            FooterMain
        }
    }
</script>

<style>
    .break{
        margin-bottom: 5rem;
    }

    .microfinance-loans-container{
        background-color: rgba(247, 234, 217, 0.447);
        padding: 5rem;
    }

    .microfinance-loans-content{
        margin-left: 2.5rem;
        background-color: white;
        margin-right: 2.5rem;
    }

    .microfinance-loans-img img{
        display: block;
        position: relative;
        max-width: 100%;
    }

    .microfinance-loans-description{
        margin: 4rem;
    }

    .microfinance-loans-description p{
        font-size: medium;
    }

    .microfinance-loans-classes{
        margin: 5rem;
        margin-left: 11rem;
        padding: 2rem;
    }

    .microfinance-loans-classes img{
        max-width: 5%;
        position: absolute;
        margin-left: -7rem;
    }

    .microfinance-loans-content p{
        margin-top: 1rem;
    }
</style>