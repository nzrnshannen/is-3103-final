<template>
    <div class="main-container maintenance-wrapper">
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 left-bg"></div>
                    <div class="col-lg-6 right-bg">
                        <div class="countdown-wrapper-maintenance section-space--ptb_60">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="maintenance-logo text-center">
                                        <img src="../assets/img/logo/logo-dark.png" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="maintenance-title text-center">
                                        <h3 class="section-title font-weight--bold mb-15">Something really good is <br>coming very soon!</h3>
                                    </div>
                                </div>
                                <div class="col-sm-10 m-auto">
                                    <div class="timer text-center">
                                        <div class="countdown-deals counter-style--one">
                                            <Countdown deadline="december 31, 2022" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-sm-8 mx-auto">
                                    <div class="maintenance-newsletter">
                                        <div class="newsletter-form--two text-center">
                                            <form>
                                                <input type="email" placeholder="Email">
                                                <button class="ht-btn ht-btn-md">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Countdown from "@/components/Countdown"
    export default {
        name: 'ComingSoon',

        components: {
            Countdown,
        }
    }
</script>