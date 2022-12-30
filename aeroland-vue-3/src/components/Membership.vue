<template>
    <Navbar/>
        <div class="break">
        <br>
        </div>
    
    <div class="membership-container">
        <div class="membership-content">
            <img src="../assets/img/membership.jpg">
            <div class="membership-head">
                <h1>Membership</h1>
                <div class="membership-qualification">
                    <h5>Qualification</h5>
                    <p>Any natural person can be a member of the Cebu CFI Community Cooperative provided he/she possess the following:</p>
                    <ul>
                        <li>Must be 18 years of age</li>
                        <li>Must be a Filipino Citizen</li>
                        <li>If living abroad, must be a natural-born Filipino Citizen with a residence of the Philippines</li>
                        <li>Must be able to validate enter into a contract</li>
                    </ul>
                </div>
                <div class="membership-online-application">
                    <h5>Online Application</h5>
                    <p>CFI only accepts online applications for membership which a prospective applicant can do so through its membership Online Application facility found on this website by simply clicking the menu button found on the homepage.</p>
                    <p>The application system has 4 stages of activities that a member must fully accomplish is a successive sequence before he is allowed to go to the next stage. It consists of the applicant’s personal profile, taking a selfie photo of himself, and the uploading of supporting documents, watching the 23-minute video seminar, and the submission of the online application.</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="membership-details">
            <div class="online-form">
                <div class="online-form-head">
                    <h3>Online Form</h3>
                </div>
                <div class="online-form-content">
                    <p>The applicant must accomplish the online application form by filling in all the required personal details such as name, date of birth, address, mobile number, and other personal information of the applicant.</p>
                </div>
            </div>

            <div class="supporting-document">
                <div class="supporting-document-head">
                    <h3>Supporting Documents</h3>
                </div>
                <div class="supporting-document-content">
                    <p>The prospective member must be prepared to upload the following supporting documents in the online application system for membership:</p>
                    <div class="suporting-document-content list">
                        <ol>
                            <li>Proof of  Identity which could be a copy  of any valid government ID with a photo of the applicant,</li>
                            <li>A signature specimen that the applicant will be required to upload together with proof of identity.</li>
                            <li>Proof of date of birth which could be an NSO birth certificate, baptismal certificate, or any government ID showing date of birth of the applicant.</li>
                            <li>Proof of address which could be proof of billing such as any utility bill or any government showing applicant’s address.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="health-plan">
                <div class="health-plan-head">
                    <h3>Health Plan</h3>
                </div>
                <div class="health-plan-content">
                    <p>All members below 60 years of age are required to participate in the CFI Health Plan known as the Mutual Medical Assistance Fund or MMAF. Under this plan, a covered member will be required to contribute the amount of P6,240 annually in exchange for coverage of a Maximum of P100.000 in medical and hospital expenses in a year.</p>
                    <p>The amount is payable in 12 equal monthly installments to start on the 8th day of June and every succeeding 11 months thereafter.</p>
                    <p>For new members, an account will be set up for them but their coverage and corresponding payment will start in June following the date of enrollment.</p>
                </div>
            </div>

            <div class="dues-share-capital">
                <div class="dues-share-capital-head">
                    <h3>Dues/Share Capital</h3>
                </div>
                <div class="dues-share-capital-content">
                    <p>Upon enrollment, 2 accounts will be set up for the member which must be paid as soon as possible.</p>
                    <p>First is the annual membership dues of P1,000.00 and second, is the minimum share capital requirement of P2,000.00</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="rights-and-duties">
            <div class="rights-of-membership">
                <h5>Rights of Membership</h5>
                <div class="rights-of-membership-content">
                    <ul>
                        <li>Equal voting rights with other members regardless of the amount of share capital contribution.</li>
                        <li>To avail of all services and facilities of the COOP such as loans, tax-free interest income on deposits, whether savings or time and participation in the COOP’s Health fund called the MMAF.</li>
                        <li>To invest in a tax-exempt dividend-bearing share capital equity participation in the COOP’s capital base.</li>
                        <li>To be informed of the financial status of the cooperative</li>
                        <li>To attend and participate in all general and special meetings for the membership</li>
                        <li>To have access to information on all policies, guidelines rules and procedures affecting membership rights and interests.</li>
                    </ul>
                </div>
            </div>

            <div class="duties-and-responsibilities">
                <h5>Duties and Responsibilities of Membership</h5>
                <div class="duties-and-responsibilities-content">
                    <ul>
                        <li>To pay promptly the annual membership dues</li>
                        <li>To settle promptly all outstanding obligations with the COOP</li>
                        <li>To maintain a current record of all personal data in the CFI database</li>
                        <li>To be regularly informed of new policies, procedures, news or events concerning COOP matters by regularly accessing the COOP’s website and online social media pages.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <br>
    <FooterMain/>

</template>

<script>
    import Navbar from './Navbar.vue';
    import FooterMain from './FooterMain.vue';
    export default{
        name: 'Membership',
        components: {
            Navbar,
            FooterMain
        }
    }
</script>

<style>
    .break{
        margin-bottom: 4rem;
    }

    .membership-container{
        margin-left: 5rem;
        margin-right: 5rem;
        display: block;
    }

    ul{
        list-style-type: circle;
        list-style-position: inside;
    }

    .membership-content img{
        margin-left: 6rem;
        margin-right: 5rem;
        width: 80%;
    }

    .membership-content{
        margin-left: auto;
        margin-right: auto;
        padding: 3rem;
    }

    .membership-content h1{
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    h5{
        margin-bottom: 2rem;
        margin-top: 1.5rem;
    }
    .membership-qualification p{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
    }

    h3{
        padding: none;
        margin: 2rem;
    }

    .membership-details{
        background: rgb(5, 5, 49);
        padding: 3rem;
    }

    .membership-details{
        color: rgba(255, 255, 255, 0.838);
    }
    
    .membership-details h3{
        margin-top: 5rem;
        margin-left: 0rem;
        color: rgb(108, 208, 175);
    }

    .rights-and-duties{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-right: 1rem;
        padding: 2rem;
        width: 100%;
        grid-gap: 3rem;
    }

    .rights-and-duties p{
        margin-right: rem;
    }

    .rights-of-membership-content p, 
    .righrights-of-membership-content li{
        display: block;
        margin-right: auto;
        margin-left: auto;
    }


</style>