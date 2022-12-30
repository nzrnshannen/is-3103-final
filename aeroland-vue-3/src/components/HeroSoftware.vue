<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1" >
            <div class="position-relative">
                <swiper
                    :speed="1000"
                    :loop="true"
                    :slides-per-view="30"
                    :effect="'fade'"
                    :navigation="swiperOptions.navigation"
    
                >
                    <swiper-slide class="swiper-slide" :style="bgImg" >
                        <div class="hero-item" >
                            <div class="hero-content" >
                                <h2 class="h1 hero-content-title">Health Services Advisory</h2>
                                <h6 class="hero-content-subtitle">You can now book online for medical consultation with the CFI doctor in our clinic, and issuance of letter of authority (LOA) using our CFI helpdesk. Download the CFI Online app on Google Playstore for Android and App Store for IOS.</h6>
                                
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/health-services-advisory.png" class="img-fluid" alt="hero thumb" style="margin:40%">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">We Are Hiring</h2>
                                <h6 class="hero-content-subtitle">We are hiring! Billing & Collections Personnel for Dipolog Branch. Email your resume with latest 2x2 picture, TOR (Transcript of Records), and state the position applying for at hr@cficoop.com</h6>
                                <!-- <div class="btn btn--green" id="hiring-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/we-are-hiring.jpg" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">MMAF Advisory: Free Life Insurance Cover of Php 50, 000.00 </h2>
                                <h6 class="hero-content-subtitle">Members aged 18 to 69 years old who are covered under the MMAF program of CFI will enjoy life insurance cover of P50,000.00 in case of death resulting from illness or accident.</h6>
                                <!-- <div class="btn btn--green" id ="mmaf-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/insurance.png" class="img-fluid" alt="hero thumb" style="margin: 25%">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Cebu CFI Coop Members Advisory</h2>
                                <h6 class="hero-content-subtitle"><b>NEW CUT-OFF SCHEDULE</b>. Please be advised that effective July 01, 2021, the new cut-off time for member's transactions is at 3:00 PM.</h6>
                                <!-- <div class="btn btn--green" id="cfi-members-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/cebu-cfi-members.png" class="img-fluid" alt="hero thumb" style="margin: 15%">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">CFI Wallet Advisory</h2>
                                <h6 class="hero-content-subtitle">Effective December 16, 2020, all net proceeds of approved CFI Loans will be deposited in the member borrowser's CFI Savings Account. It can immediately be withdrawn through your CFI Wallet available in your e-Services account.</h6>
                                <!-- <div class="btn btn--green" id="cfi-wallet-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/cfi-wallet.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Credit Cash Wallet Advisory</h2>
                                <h6 class="hero-content-subtitle">A virtual credit card available for you, and you are given a credit line of Php 10,000-Php 50,000 as your credit line, which you can access through your CFI Wallet.</h6>
                                <!-- <div class="btn btn--green" id="credit-cash-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/credit-cash.png" class="img-fluid" alt="hero thumb" style="margin:15%">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">e-Services Advisory</h2>
                                <h6 class="hero-content-subtitle">All members are required to register in CFI e-Services to apply or renew loans, withdraw deposits, monitor the status of your account, and update your profile.</h6>
                                <!-- <div class="btn btn--green" id="e-services-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/eServices.jpg" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item" >
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Help Desk Advisory</h2>
                                <h6 class="hero-content-subtitle">The CFI Help Desk is a support facility intended for the exclusive use of the CFI COOP Members.</h6>
                                <!-- <div class="btn btn--green" id="help-desk-popup">
                                    <span class="btn-icon  ml-0 mr-2"></span> Read More
                                </div> -->
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/help-desk.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>

                    <!-- Optional controls -->
                    <div class="swiper-button-prev swiper-button-white">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="swiper-button-next swiper-button-white">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, EffectFade } from 'swiper/core'
import { height } from "dom7";
    SwiperCore.use([Navigation, EffectFade])
    
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/hero-software/software-shape.png")})`
                    
                },
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };

</script>

<style lang="scss"> 
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-software.scss';

    // .hero-thumb img{
    //     margin: 25%;
    // }

    .hero-software .hero-swiper-btn .swiper-slide{
        height: 10%;
    }

</style>
