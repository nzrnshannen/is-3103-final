<template>
    <!-- <b-navbar type="light" toggleable="xl" v-b-scrollspy:nav-scroller class="header-area header-agency" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand" to="/"><img :src='"../assets/img/logo/logo-dark.png"' alt="logo"></b-navbar-brand>
            <b-btn-group class="header-config-wrapper">
                <b-btn class="header-config" @click="toggleClass('addClass', 'active')"><i class="far fa-search"></i></b-btn>
            </b-btn-group>
            <b-collapse class="default-nav justify-content-end"  is-nav id="nav_collapse">
                <b-navbar-nav class="navbar-nav main-menu">
                    <b-nav-item to="/"><span>LANDING</span></b-nav-item>
                    <b-nav-item href="#home" class="scroll"><span>HOME</span></b-nav-item>
                    <b-nav-item href="#about" class="scroll"><span>ABOUT</span></b-nav-item>
                    <b-nav-item href="#team" class="scroll"><span>OUR TEAM</span></b-nav-item>
                    <b-nav-item href="#project" class="scroll"><span>PROJECT</span></b-nav-item>
                    <b-nav-item href="#contact" class="scroll"><span>CONTACT</span></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar> -->

    <header class="header-area header-agency navbar-light" :class="{'is-sticky': isSticky}">
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
                </div>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
                            <a class="nav-link" href="#team" @click="menuCollapseOnLinkClick">
                                <span>our team</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project" @click="menuCollapseOnLinkClick">
                                <span>project</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact" @click="menuCollapseOnLinkClick">
                                <span>contact</span>
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

<style lang="scss" scoped>
    .header-agency {
        &.is-sticky {
            top: 0;
            left: 0;
            position: fixed;
            width: 100%;
        }
    }
</style>