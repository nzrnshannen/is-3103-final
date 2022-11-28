<template>
    <div class="brand-logo-slider-area section-space--pt_90" :class="brandlogo">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-logo-slider__container-area">
                        <div class="swiper-container brand-logo-slider__container">
                            <div class="swiper-wrapper brand-logo-slider__wrapper">
                                <swiper
                                    :speed="1000"
                                    :slidesPerView="6"
                                    :spaceBetween="30"
                                    :loop="true"
                                    :breakpoints="swiperOptions.breakpoints"
                                >
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-01.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-02.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-03.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-04.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-05.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="agency-brand-logo brand-logo--slider">
                                        <div class="brand-logo__image text-center">
                                            <img src="../assets/img/brand/agency-client-logo-06.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import "swiper/css"
    
    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        props: ["brandlogo"],
        data (){
            return {
                swiperOptions: {
                    breakpoints: {
                        1200:{
                            slidesPerView : 6
                        },
                        992:{
                            slidesPerView : 4
                        },
                        768:{
                            slidesPerView : 3
                        },
                        480:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    }
</script>