<template>
    <Navbar/>
    <div class="break">
        <br>
    </div>

    <div class="special-indiv-container">
        <div class="special-indiv-content">
            <div class="special-indiv-content-img">
                <img src="../assets/img/special-indiv-loans.jpg">
            </div>
            <div class="special-indiv-description">
                <h3>Special Individual Loans</h3>
                <p>These are types of loans extended to members on the basis of one’s source of income other than the salary and benefits he receives from his employment. The CFI has several types of these loans, namely:</p>
                <hr>
            </div>
            <div class="special-indiv-type">
                <img src="../assets/img/deposit-loan.svg">
                <h5>Deposit Loan</h5>
                <p>This is the so-called back to back loan facility where a member is allowed to borrow up to 80% of his deposits with CFI, whether savings or time, including the member’s share capital by using the said deposits or share capital as security.</p>
                <p>The deposit loan is payable in installments and the installment period will range from a minimum of 12 months up to a maximum of 60 months.</p>
            </div>

            <div class="special-indiv-type">
                <img src="../assets/img/pension-loan.svg">
                <h5>Pension Loan</h5>
                <p>A loan facility extended to members who are receiving regular monthly pensions from a government-administered or accredited pension institution and as such, they are allowed to borrow such sums or amounts using their pensions to cover for the monthly installment payments.</p>
            </div>

            <div class="special-indiv-type">
                <img src="../assets/img/allotment-loan.svg">
                <h5>Allotment Loan</h5>
                <p>This is a loan facility extended to members who, although not gainfully employed, are receiving regular allotment allowance from a member of the family who works abroad. The loan is computed from the computed regular monthly allotment for the last six months multiplied by the number of installment period applied for but not to exceed the maximum limit set by the CFI for the installment period.</p>
            </div>

            <div class="special-indiv-type">
                <img src="../assets/img/personal-advantage-loan.svg">
                <h5>Personal Advantage Loan</h5>
                <p>Loans which are computed on the basis of a member’s declared income as reflected in the Income Tax Return submitted with the Bureau of Internal Revenue and supported by bank statements.</p>
                <p>Under this type of loan, a certain percentage of the average monthly income of the borrowing member will be the appraised monthly installment capacity which will then be used to determine the maximum loanable amount per length of installment period.</p>
                <p>A borrowing member can opt for an installment period in multiples of 12 ranging from a minimum of 12 months to a maximum of 60 months.</p>
                <p>Thus, if the borrowing member has a computed monthly installment capacity of P10,000.00 and would opt for a 60 month installment period, the maximum loanable amount will be P600,000,00</p>
                <p>To be eligible for this loan, the member must show his capacity to pay through the submission of his Income Tax Return and bank statement for the current year.</p>
            </div>

            <div class="special-indiv-type">
                <img src="../assets/img/special-credit-ewallet.svg">
                <h5>Special Credit E-Wallet</h5>
                <p>This is a revolving credit line facility available to qualified members, which they can avail of through a virtual card. Once the credit line is approved, the borrowing member can draw a loan up to the credit limit through the virtual card provided to him by CFI. Whatever amount is drawn is payable in one year through equal monthly installments, while any payment on the principal will restore the member’s credit line up to the amount paid.</p>
                <p style="margin-bottom: 3rem;">This credit e-wallet works like a credit card but is, likewise, different in the sense that its credit line is not only revolving but renewable and so whatever balance of the previous drawdown will be carried over and renewed to the new drawdown.</p>
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
        name: 'SpecialIndividualLoans',
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
    .special-indiv-container{
        background-color: rgba(247, 234, 217, 0.447);
        padding: 5rem;
    }

    .special-indiv-content{
        margin-left: 2.5rem;
        background-color: white;
        margin-right: 2.5rem;
    }

    .special-indiv-content-img img{
        display: block;
        position: relative;
        max-width: 100%;
    }

    .special-indiv-description{
        margin: 4rem
    }

    .special-indiv-type{
        margin: 5rem;
        margin-left: 11rem;
        padding: 2rem;
    }

    .special-indiv-type img{
        max-width: 5%;
        position: absolute;
        margin-left: -7rem;
    }
    
</style>
