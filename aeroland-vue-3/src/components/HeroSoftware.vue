<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="position-relative">
                <swiper
                    :speed="1000"
                    :loop="true"
                    :slides-per-view="30"
                    :effect="'fade'"
                    :navigation="swiperOptions.navigation"
                >
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Your business deserves better software</h2>
                                <h6 class="hero-content-subtitle">No coding skills required to create unique sites.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/hero/hero-software/software-thumb-1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Better software promotes sales & profits</h2>
                                <h6 class="hero-content-subtitle">AeroLand doesn't require users to be experts.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-software/software-thumb-2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Your business deserves better software</h2>
                                <h6 class="hero-content-subtitle">No coding skills required to create unique sites.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/hero/hero-software/software-thumb-3.png" class="img-fluid" alt="hero thumb">
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
</style>
