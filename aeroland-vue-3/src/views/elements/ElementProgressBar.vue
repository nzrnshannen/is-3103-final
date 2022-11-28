<template>
    <div class="main-container">
        <HeaderElement />

        <!-- breadcrumb start -->
        <Breadcrumb>
            <template #breadcrumb>
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Gradation</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="">Elements</router-link></li>
                        <li class="breadcrumb-item active">Progress bar</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- progress bar component -->
        <div class="progress-bar-warpper section-space--pt_120 section-space--mb_60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </div>

        <!-- footer section -->
        <FooterMain/>

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

        <!-- off-canvas mobile menu -->
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import ProgressBar from '@/components/ProgressBar'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementProgressBar',
        components: {
            HeaderElement,
            Breadcrumb,
            ProgressBar,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

