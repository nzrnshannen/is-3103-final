<template>
    <div class="hero-ebook hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper
                    :speed="1000"
                    :loop="true"
                    :navigation="swiperOptions.navigation"
                >
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb3.png" class="img-fluid" alt="hero thumb">
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
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation])

    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/ebook/ebook-hero-bg.jpg")})`
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
