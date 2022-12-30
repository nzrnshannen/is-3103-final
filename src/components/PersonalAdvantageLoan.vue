<template>
    <Navbar/>
    <div class="break">
        <br>
    </div> 

    <div class="pal-container">
        <div class="pal-content">
            <div class="pal-content-img">
                <img src="../assets/img/personal-loan-advantage.jpg">
            </div>
            <div class="pal-description-head">
                <h3>PAL – Personal Advantage Loan</h3>
            </div>
            <div class="pal-description">
                <h6 style="margin-top: -8rem">Nature</h6>
                <p>It is a loan available to qualified members to answer for their personal financial needs such as medical expenses, school tuition for their children, house repairs or renovations, family travel, and such other types of personal expenses where a member could only afford to spend for them or paid through installments over a  certain period of time.</p>
            </div>
            <div class="pal-description">
                <h6>Features</h6>
                <p>The salient features of this type of loan are as follows:</p>
                <ol>
                    <li>The loan is based on a member’s computed monthly installment capacity ( MIC) in relation to the installment period applied for. Thus, the maximum loanable amount a member may apply is determined by the computed MIC multiplied by the number of installment months.</li>
                    <li>A member may apply for such amount of loan provided it is within his computed maximum allowable loanable amount.</li>
                    <li>Nevertheless, the maximum loan a member can apply under this program is P150,000.00, even if a member’s MIC can justify a higher amount.</li>
                    <li>A member may apply for such number of loans  provided the total amount of loan applied for will not exceed the member’s computed maximum loanable amount</li>
                    <li>A member may also renew the loan at any time provided the renewal will result in net loan proceeds for the member.</li>
                </ol>
            </div>
            <div class="pal-description">
                <h6>Eligibility</h6>
                <p>Any member is eligible to apply for this type of loan provided the following conditions are met:</p>
                <ol>
                    <li>He is a member in good standing.</li>
                    <li>Except for deposit loans and business loans, he has no existing loan with the COOP  which is payable by installment.</li>
                    <li>He is gainfully employed with a determinable regular monthly income.</li>
                </ol>
            </div>
            <div class="pal-description">
                <h6>Computation of MIC</h6>
                <p>A member’s MIC is computed on the basis of his averaged monthly income as evidenced by his Income Tax Return or ITR  and bank statements. Such percentage is dependent on the number of years of membership to with:</p>
                <ol>
                    <li>Less than three years of membership- 10 % of averaged monthly income</li>
                    <li>Three to five years of membership –  15 % of averaged monthly income</li>
                    <li>More than 5 years of membership –   20%  of averaged monthly income</li>
                </ol>
            </div>
            <div class="pal-description">
                <h6>Interest Rate</h6>
                <p>The interest rate on the loan shall be 12% computed on a flat rate basis.</p>
            </div>
            <div class="pal-description">
                <h6>Installment Period</h6>
                <p>The borrowing member can choose to pay the loan from a minimum of 12 monthly installments to a maximum of 60 monthly installments.</p>
            </div>
            <div class="pal-description">
                <h6>Start of Installment Period</h6>
                <p>The installment shall start on the 8th  day of the month immediately following the month of approval of the loan and of which the member is given a period of 30 days from the due date to make payment.</p>
            </div>
            <div class="pal-description">
                <h6>Loan Application</h6>
                <p>A member can only apply for this loan through CFI’s online E-Services.</p>
            </div>
            <div class="pal-description">
                <h6>Supporting Documents</h6>
                <p>The applicant must be ready to upload electronic copies of the following supporting documents.</p>
                <ol style="list-style-type:lower-alpha">
                    <li>Completed PAL application form</li>
                    <li>Income Tax Return (ITR)</li>
                    <li>Bank Statement (12months)</li>
                    <li>Proof of Billing/ Residency / Brgy Clearance</li>
                    <li>2 Valid ID’s with 3 specimen</li>
                </ol>
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
        name: 'PersonalAdvantageLoan',
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

    .pal-container{
        background-color: rgba(247, 234, 217, 0.447);
        padding: 5rem;
    }

    .pal-content{
        margin-left: 2.5rem;
        background-color: white;
        margin-right: 2.5rem;
    }

    .pal-content-img img{
        display: block;
        position: relative;
        max-width: 100%;
    }

    .pal-description{
        margin-top: 1rem;
        margin-left: 4rem;
        padding: 2rem;
    }

    .pal-description-head{
        padding: 5rem;
        margin-bottom: 5rem;
    }

    .pal-description h3{
        margin-left: -3rem;
    }

    .pal-description h6{
        padding: 1rem;
        margin-left: -1.1rem;
        color: rgba(83, 83, 140, 0.92);
    }
    
    .pal-description li{
        margin-left: 2rem;
    }

</style>