<template>
    <div class="footer-area-wrapper" :class="FooterStyle">
        <div class="footer-area section-space--ptb_90">
            <div class="container">
                <div class="row footer-widget-wrapper">
                    <div class="col-lg-4 col-md-6 footer-widget">
                        <!-- <div class="footer-widget__logo mb-30">
                            <router-link to="/">
                                <img src="../assets/img/logo/logo-dark.png" class="img-fluid logo-dark" alt="logo">
                                <img src="../assets/img/logo/logo-light.png" class="img-fluid logo-light" alt="logo">
                            </router-link>
                        </div> -->
                        <ul class="footer-widget__list" style="padding-left: 2.5rem;">
                            <h6 class="footer-widget__title mb-20">CONTACT US</h6>
                            <li>
                                <a href="mailto:info@cficoop.com" class="hover-style-link">Email: info@cficoop.com</a>
                            </li>
                            <li>
                                <a href="tel:0322552525" class="hover-style-link">(032) 255-2525</a>
                            </li>
                            <li>
                                <!-- Help Desk href-->
                                <a href="www.website.com" target="_blank" class="hover-style-link hover-style-link--green">Help Desk</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget" style="width:max-content; padding-right:10rem">
                        <h6 class="footer-widget__title mb-20">OPERATING HOURS</h6>
                        <ul class="footer-widget__list">
                            <li>
                                Monday to Friday 8:30 AM-6:00 PM
                            </li>
                            <li>
                               Saturday 8:30 AM-3:00 PM
                            </li>
                    
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget address" style="width: 29%;">
                        <h6 class="footer-widget__title mb-20">ADDRESS</h6>
                        <ul class="footer-widget__list">
                            <li>
                                Esperanza Fiel Garcia Bldg., Capitol Compound (Capitol Site),N Escario St, Cebu City, 6000 Cebu
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="footer-copyright-area border-top section-space--ptb_30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <span class="copyright-text">
                            &copy; 2022 <b>AeroLand</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a>
                        </span>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item">
                                <a href="https://www.facebook.com/" target="_blank" class="social-link"> <i class="fab fa-facebook social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://twitter.com/" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://www.instagram.com/" target="_blank" class="social-link"> <i class="fab fa-instagram social-link-icon"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .footer-area-wrapper{
        margin-top: -3rem;
    }
</style>
<script>
    export default {
        props: ["FooterStyle"]
    }
</script>
