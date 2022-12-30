<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="testimonial-slider">
                <div class="testimonial-slider__container">
                    <div class="testimonial-slider__wrapper">
                        <swiper 
                            :speed="800"
                            :loop="true"
                            :slidesPerView="3"
                            :spaceBetween="30"
                            :pagination="swiperOptions.pagination"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide class="testimonial-slider__single wow move-up">
                                <div class="testimonial-slider__media">
                                    <img src="../assets/img/team/avatar-01-120x120.png" class="img-fluid" alt="">
                                </div>
                                <div class="testimonial-slider__text">@AeroLand was unbelievably helpful to me when I need to find a responsive HTML template for my upcoming websites Love</div>
                                <div class="testimonial-slider__author">
                                    <h6 class="name">Abbie Ferguson</h6>
                                    <span class="designation">WEB DESIGNER</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="testimonial-slider__single wow move-up">
                                <div class="testimonial-slider__media">
                                    <img src="../assets/img/team/avatar-02-120x120.png" class="img-fluid" alt="">
                                </div>
                                <div class="testimonial-slider__text">Working with @AeroLand is like having a family member who can fix everything. They know what you need, exactly when you need it.</div>
                                <div class="testimonial-slider__author">
                                    <h6 class="name">Blanche Fields</h6>
                                    <span class="designation">LEMIUM MARKETING</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="testimonial-slider__single wow move-up">
                                <div class="testimonial-slider__media">
                                    <img src="../assets/img/team/avatar-03-120x120.png" class="img-fluid" alt="">
                                </div>
                                <div class="testimonial-slider__text">I can’t believe I built a whole website on my own. Thanks to AeroLand supporting team, I could do everything all by myself now.</div>
                                <div class="testimonial-slider__author">
                                    <h6 class="name">Dean Casey</h6>
                                    <span class="designation">WEB DESIGNER</span>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-1 section-space--mt_60 text-center"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },
                        
                        991:{
                            slidesPerView : 2
                        },

                        767:{
                            slidesPerView : 1

                        }
                    }
                }
            }
        }   
    }
</script>
