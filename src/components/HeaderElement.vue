<template>
    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">
        <div class="container-fluid container-fluid--cp-150">
            <nav class="navbar navbar-expand-lg" id="navbar-example2">
                <router-link to="/">
                    <img src="../assets/img/logo/logo-dark.png" alt="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="mobiletoggleClass('addClass', 'active')">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="header-config-wrapper btn-group">
                    <button class="header-config btn" @click="toggleClass('addClass', 'active')">
                        <i class="far fa-search"></i>
                    </button>
                    <router-link to="" class="ht-btn ht-btn--outline hire-btn d-none d-xl-block">Buy Now</router-link>
                </div>

                <div class="collapse navbar-collapse justify-content-center">
                    <ul class="nav navbar-nav main-menu element-menu">
                        <li class="nav-item dropdown">
                            <router-link to="" class="nav-link dropdown-toggle" id="homes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>Home Pages</span>
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="homes">
                                <li>
                                    <router-link to="/branding" class="dropdown-item">Home Branding</router-link>
                                </li>
                                <li>
                                    <router-link to="/sass" class="dropdown-item">Home Sass</router-link>
                                </li>
                                <li>
                                    <router-link to="/software" class="dropdown-item">Home Software</router-link>
                                </li>
                                <li>
                                    <router-link to="/start-up" class="dropdown-item">Home Start Up</router-link>
                                </li>
                                <li>
                                    <router-link to="/app-landing" class="dropdown-item">Home App Landing</router-link>
                                </li>
                                <li>
                                    <router-link to="/showcase" class="dropdown-item">Home Showcase</router-link>
                                </li>
                                <li>
                                    <router-link to="/ebook" class="dropdown-item">Home Ebook</router-link>
                                </li>
                                <li>
                                    <router-link to="/clinic" class="dropdown-item">Home Clinic</router-link>
                                </li>
                                <li>
                                    <router-link to="/payment" class="dropdown-item">Home Payment</router-link>
                                </li>
                                <li>
                                    <router-link to="/agency" class="dropdown-item">Home Agency</router-link>
                                </li>
                                <li>
                                    <router-link to="/product-showcase" class="dropdown-item">Product Showcase</router-link>
                                </li>
                                <li>
                                    <router-link to="/digital-store" class="dropdown-item">Digital Store</router-link>
                                </li>
                                <li>
                                    <router-link to="/coming-soon" class="dropdown-item">Coming Soon</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="" class="nav-link dropdown-toggle" id="elements" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>Elements</span>
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="elements">
                                <li>
                                    <router-link to="/element-tab" class="dropdown-item">Element Tab</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-accordion" class="dropdown-item">Element Accordion</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-team-member" class="dropdown-item">Element Team Member</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-buttons" class="dropdown-item">Element Buttons</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-cta" class="dropdown-item">Element CTA</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-testimonial" class="dropdown-item">Element Testimonial</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-box-icon" class="dropdown-item">Element Box Icon</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-pricing-box" class="dropdown-item">Element Pricing Box</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-gradation" class="dropdown-item">Element Gradation</router-link>
                                </li>
                                <li>
                                    <router-link to="/element-progress-circle" class="dropdown-item">Element Progress Circle</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="" class="nav-link dropdown-toggle" id="portfolios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>Portfolio Pages</span>
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="portfolios">
                                <li>
                                    <router-link to="/portfolio-grid" class="dropdown-item">Portfolio Grid</router-link>
                                </li>
                                <li>
                                    <router-link to="/Portfolio-grid-wide" class="dropdown-item">Portfolio Grid Wide</router-link>
                                </li>
                                <li>
                                    <router-link to="/portfolio-grid-caption" class="dropdown-item">Portfolio Grid Caption</router-link>
                                </li>
                                <li>
                                    <router-link to="/portfolio-grid-caption-wide" class="dropdown-item">Portfolio Grid Caption Wide</router-link>
                                </li>
                                <li>
                                    <router-link to="/portfolio-details" class="dropdown-item">Portfolio Details</router-link>
                                </li>
                                <li>
                                    <router-link to="/portfolio-details-two" class="dropdown-item">Portfolio Details Two</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="" class="nav-link dropdown-toggle" id="blogs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>Blog Pages</span>
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="blogs">
                                <li>
                                    <router-link to="/blog-list-large-image" class="dropdown-item">Blog List Large Image</router-link>
                                </li>
                                <li>
                                    <router-link to="/blog-details" class="dropdown-item">Blog Details</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data (){
            return {
                isSticky: false
            }
        },

        mounted () {
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
            // offcanvas searchbox
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    }
</script>

<style lang="scss">
    .mobile-menu-bar {
        color:#6d70a6;
        font-size: 25px;
        border: 1px solid#6d70a6;
        padding: 8px 10px 10px;
        line-height: 1;
        height: 42px;
        margin-top: 6px;
        border-radius: 4px;
    }

    .element-menu {
        [aria-expanded="false"] {
            background-color: transparent;
        }
        .dropdown-item {
            font-size: 14px;
            &:hover {
                color: #5945e6;
                background-color: transparent;
            }
        }
        .dropdown-menu {
            border: none;
            border-bottom: 3px solid #5945e6;
            margin-top: -2px;
        }
    }
</style>