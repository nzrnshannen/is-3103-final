<template>

    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">  
              
        <div class="container-fluid container-fluid--cp-150">
            <div class="container-fluid container-fluid--cp-150">
                <nav class="navbar navbar-expand-lg" id="navbar-example2">
                    
                        <img src="../assets/img/cfi-logo.jpg" class="cfi-icon" alt="logo" width="450" height="105">
                   
                    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="header-config-wrapper btn-group">
                        
                        <img src="../assets/img/PhoneIcon.png"><span><div class="call">Call us!</div><div>255-25-25</div></span>
                    </div>
    
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        
                    </div>
                </nav>
            </div>
               
            <nav class="navbar navbar-expand-lg" id="navbar-example2">         
               
            
                
                 
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="nav main-menu">
                        <li class="nav-item">
                            <a class="nav-link" router-link to="/homepage" @click="menuCollapseOnLinkClick">
                                <router-link to="/homepage">HOME</router-link>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#about" @click="menuCollapseOnLinkClick">
                                <span>ABOUT US</span>    
                                <div class= "dropdown about-us">
                                    <a href="#">History</a>
                                    <router-link to="/about-company-profile">Company Profile</router-link>
                                    <router-link to="/about-financial-report">Financial Report</router-link>
                                    <a href="#">Board of Directors</a>
                                    <a href="#">Corporate Officers</a>
                                    <a href="#">Awards & Distinction</a>
                                </div> 
    
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#requirement" @click="menuCollapseOnLinkClick">
                                <router-link to="/membership">Membership</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pricing" @click="menuCollapseOnLinkClick">
                                <router-link to="/investment">Investment</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#partner" @click="menuCollapseOnLinkClick">
                                <span>HEALTH PLANS</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#partner" @click="menuCollapseOnLinkClick">
                                <span>LOANS</span>
                                <div class="dropdown loans">
                                    <router-link to="/commonprovisions">Common Provisions</router-link>
                                    <a href="#">Employee's Loan</a>
                                    <router-link to="/special-individual-loans">Special Individual Loans</router-link>
                                    <router-link to="/personal-adv-loan">PAL - Personal Advantage Loan</router-link>
                                    <a href="#">Commercial Loan</a>
                                    <router-link to="/microfinance-loans">Microfinance Loans</router-link>
                                     <router-link to="/creditcashwallet">CFI Credit Cash Wallet</router-link>
                                </div>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#partner" @click="menuCollapseOnLinkClick">
                                <span>SUPPORT</span>
                                <div class="dropdown support" style="width: 13rem">
                                    <router-link to="/e-services">CFI E-Services</router-link>
                   
                                    <router-link to="/helpdesk">Help Desk</router-link>
                         
                                    <router-link to="/online-membership">Online Membership</router-link>
                                    
                                    <a href="#">Download Forms</a>
                                    
                                    <router-link to="/cfi-videos">CFI Videos</router-link>
                                    <a href="#">Calculator</a>
                                    <a href="#">Branch </a>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

        <hr>

    </header>
</template>

<style>

#phone:hover {
    transform: scale(1.1);
}

#phone span {
    display:inline-block;
    padding-left:1px;
    padding-top: 17px;
    
   
    

    
}
#phone img {

    width:40%;
    margin-top:-17px;
    margin-left: 19px;
    
}


#phone span .call {
margin-bottom: -6px;
margin-left: 10px;
margin-top: 25px;

font-weight: 500;
color: black;
}

.cfi-icon {
        margin-top: 18px;
}


    .nav-item .dropdown{
        display: none;
        position: absolute;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .nav-item:hover .dropdown{
        display:block;
        z-index: 1;
        background-color: white;
    }

    .nav-item:hover .dropdown a{
        display: block;
        z-index: 1;
        padding: 2px 4px;
        margin: 0px 16px 4px 10px;
        background-color: white;
        font-size: smaller;
    }

    .nav-item{
        margin: 0rem 1.7rem 0rem 1.7rem;
    }

    #navbar-example2{
        z-index: 1;
    }
   

</style>

<script>
    export default {
        data(){
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            menuCollapseOnLinkClick() {
                document.getElementById('navbarSupportedContent').classList.remove('show')
            }
        },
    }
</script>

