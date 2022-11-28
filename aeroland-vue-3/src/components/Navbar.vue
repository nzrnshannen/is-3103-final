<template>
    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">
        <div class="container-fluid container-fluid--cp-150">
            <nav class="navbar navbar-expand-lg" id="navbar-example2">
                <router-link to="/">
                    <img src="../assets/img/logo/logo-dark.png" alt="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="header-config-wrapper btn-group">
                    <button class="header-config btn" @click="toggleClass('addClass', 'active')">
                        <i class="far fa-search"></i>
                    </button>
                    <router-link to="" class="ht-btn ht-btn--outline hire-btn d-none d-xl-block">Hire Us Now</router-link>
                </div>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="nav main-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="#home" @click="menuCollapseOnLinkClick">
                                <span>HOME</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" @click="menuCollapseOnLinkClick">
                                <span>ABOUT</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#requirement" @click="menuCollapseOnLinkClick">
                                <span>REQUIREMENTS</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pricing" @click="menuCollapseOnLinkClick">
                                <span>PRICING</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#partner" @click="menuCollapseOnLinkClick">
                                <span>PARTNERS</span>
                            </a>
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
                isSticky: false,
            }
        },

        mounted(){
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
            menuCollapseOnLinkClick() {
                document.getElementById('navbarSupportedContent').classList.remove('show')
            }
        },
    }
</script>