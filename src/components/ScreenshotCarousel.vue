<template>
    <div class="sc-outer pl-0 pr-0">
        <div class="row">
            <div class="col-12  wow move-up">
                <div class="flexible-image-slider-wrap">
                    <div class="swiper-container">
                        <div class="position-relative">
                            <swiper 
                                :speed="800"
                                :loop="true"
                                :slidesPerView="3"
                                :spaceBetween="30"
                                :pagination="swiperOptions.pagination"
                                :breakpoints="swiperOptions.breakpoints"
                            >
                                <swiper-slide class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-1.jpg" alt="project-1">
                                </swiper-slide>
                                <swiper-slide class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-2.jpg" alt="project-1">
                                </swiper-slide>
                                <swiper-slide class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-3.jpg" alt="project-1">
                                </swiper-slide>
                                <swiper-slide class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-4.jpg" alt="project-1">
                                </swiper-slide>
                                <swiper-slide class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-5.jpg" alt="project-1">
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div class="swiper-pagination swiper-pagination-2 section-space--mt_50 text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    SwiperCore.use([Pagination])
    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data (){
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                     breakpoints: {
                        1200:{
                            slidesPerView : 5
                        },
                        992:{
                            slidesPerView : 3
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    };
</script>