<template>
    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">
        <div class="container-fluid container-fluid--cp-150">
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
                                <span>INVESTMENT</span>
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
                                    <a href="#">Commmon Provisions</a>
                                    <a href="#">Employee's Loan</a>
                                    <a href="#">Special Individual Loans</a>
                                    <a href="#">PAL - Personal Advantage Loan</a>
                                    <a href="#">Commercial Loan</a>
                                    <a href="#">MicroFinance Loans</a>
                                    <a href="#">CFI Credit Cash Wallet</a>
                                </div>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#partner" @click="menuCollapseOnLinkClick">
                                <span>SUPPORT</span>
                                <div class="dropdown support" style="width: 13rem">
                                    <a href="#">CFI E-Services</a>
                                    <a href="#">Help Desk</a>
                                    <a href="#">Online Membership</a>
                                    <a href="#">Download Forms</a>
                                    <a href="#">CFI Videos</a>
                                    <a href="#">Calculator</a>
                                    <a href="#">Branch </a>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
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