<template>
    <div class="testimonial-slider-area section-space--ptb_120 fixed-bg" :style="bgImg" id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-slider">
                        <div class="testimonial-slider__three">
                            <div class="testimonial-slider__wrapper position-relative">
                                <swiper
                                    :speed="1000"
                                    :loop="true"
                                    :auto-height="true"
                                    :pagination="swiperOptions.pagination"
                                >
                                    <swiper-slide class="swiper-slide">
                                        <div class="testimonial-slider__wrap text-center">
                                            <div class="testimonial-slider__thum">
                                                <img src="../assets/img/team/avatar-06-90x90.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="testimonial-slider__dec">
                                                <p>“Working with Aeroland is like having a family member who can fix everything!”</p>
                                            </div>
                                            <div class="testimonial-slider__author">
                                                <h6 class="name">Colin</h6>
                                                <span class="designation">Web designer</span>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide">
                                        <div class="testimonial-slider__wrap text-center">
                                            <div class="testimonial-slider__thum">
                                                <img src="../assets/img/team/avatar-05-90x90.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="testimonial-slider__dec">
                                                <p>“Great theme, just what we were looking for. Easy to install, easy to navigate. Well-documented. Really enjoyed their support.”</p>
                                            </div>
                                            <div class="testimonial-slider__author">
                                                <h6 class="name">Cassie Ventura</h6>
                                                <span class="designation">Web designer</span>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <div class="swiper-pagination swiper-pagination-2 section-space--mt_50 text-center"></div>
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
    import SwiperCore, { Pagination } from 'swiper/core'
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/testimonial-bg.jpg')})`
                },

                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        }   
    }
</script>
