<template>
<Logo/>
    <div class="product-showcase-video-wrapper section-space--pt_60 section-space--pb_120" id="investment">
        <div class="container-fluid container-fluid--cp-120">
            <div class="row align-items-center">
                <div class="margin1">
                    <div class="product-showcase-video video-popup video-link">
                        <div >
                            <h3 style=" color:#444; text-align:left; padding-bottom:1.5rem;">Help Desk</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="row pricing-table-four">

        
                <h5 class="margin2"  style="margin-top:2rem;"><img class="margin3" src="../../assets/img/question-mark.jpg" width="3%">What is the CFI Help Desk?</h5>
                
                <div>
                    <p class="alignp4" style="padding-bottom:4rem;">It is an online service facility exclusively for use by a CFI member where he can send a question or concern directly to the CFI.</p> 
                </div>

                <br>
                <hr>


                <h5 class="margin2"  style="margin-top:2rem;"><img class="margin3" src="../../assets/img/question-mark.jpg" width="3%">What are the features of this service?
                </h5>

                <div>
                    <p class="alignp4"><b>First.</b> A member can send any concern or question to CFI and expect that it be answered within a period of 72 hours.
                    </p>
                    <p class="alignp4"><b>Second.</b> To ensure that the concern sent by a member will be properly attended to and monitored, a ticket number will be assigned to his particular concern.
                    </p>
                    <p class="alignp4"><b>Third.</b> The concerned member will receive text and email messages for every action done on his case until the final resolution.
                    </p>
                    <p   class="alignp4"><b>Fourth.</b> The member can track the status of his case by entering the ticket number in the track section of the same online help desk facility
                    </p>
                    <p style="padding-bottom:4rem;"  class="alignp4"><b>Fifth.</b> The member can respond to the message sent to him to allow him to make further inquiries.
                    </p>
                    
                </div>
           
                <hr>

                <h5 class="margin2"  style="margin-top:2rem;"><img class="margin3" src="../../assets/img/question-mark.jpg" width="3%">How can a member access the facility?</h5>
                
                <div>
                    <p class="alignp4" style="padding-bottom:4rem;">He need only press the help desk button found on the homepage of the CFI website and he will be brought to the Help Desk page.</p> 
                </div>

                
                <hr>

                <h5 class="margin2"  style="margin-top:2rem;"><img class="margin3" src="../../assets/img/question-mark.jpg" width="3%">What are the requirements for a member to be able to access the facility?</h5>
                <h6 class="margin2"  style="color:#444; margin-top:0.5rem; margin-bottom:0.5rem;">The requirements are the following:</h6>

                <div>
                    <p class="alignp4" style="padding-bottom:4rem;">1. He must be a registered member in the CFI database
                        <br>2. He must ensure that the data he enters such as first name, last name, and date of birth is exactly the same data as registered in the CFI database. Otherwise, the message will be rejected.
                    </p> 
                </div>


        </div>
    
    

</template>

<style>

.margin1{
    margin-left: 6.2rem;
    margin-top: 10rem;
    margin-bottom: -7rem;
}

.margin2{
    padding-bottom:0rem;
    text-align:left;
    margin-left:12.5rem;
    margin-top:-1rem;
   
}

.margin3{
    padding-right:10px;
    padding-bottom:5px;
}



.margin4{
    margin-top: -5.5rem;
    text-align:left;
    margin-left:12.5rem;
}

.alignleft{
    text-align: left;
}

.alignp{
    text-align:justify;
    padding-left:1.5rem;
    padding-right:1.5rem;
}

.alignp1{
    text-align:justify;
    padding-left:12.5rem;
    padding-right:12.5rem;
    font-size: 19px;
}

.alignp2{
    text-align:left;
    padding-left:1.5rem;
}

.alignp3{
    text-align:justify;
    padding-left:13.3rem;
    padding-right:12.5rem;
    font-size: 16px;
    margin-top:-1rem;
    
}

.alignp4{
    text-align:justify;
    padding-left:13.3rem;
    padding-right:12.5rem;
    padding-top:1rem;
    font-size: 17px;
    color:#444;
}

.alignp5{
    text-align:justify;
    padding-left:13.3rem;
    padding-right:12.5rem;
    margin-top:-1.3rem;
    font-size: 19px;
    
}

.space{
    margin-bottom:1rem;
}

</style>

<script>

import Logo from '../Logo.vue'

export default {
name: 'HelpDesk',
components: {
   Logo,

}


}

</script>