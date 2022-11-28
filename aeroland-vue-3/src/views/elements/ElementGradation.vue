<template>
    <div class="main-container">
        <HeaderElement />

        <!-- breadcrumb start -->
        <Breadcrumb>
            <template #breadcrumb>
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Gradation</h2>
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="">Elements</router-link></li>
                        <li class="breadcrumb-item active">Gradation</li>
                    </ul>
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- gradation component start -->
        <div class="icon-process-area section-space--ptb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Gradation />
                    </div>
                </div>
            </div>
        </div>
        <!-- gradation component end -->

        <FooterMain class="border-top" />
        <OffcanvasSearchBox />
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import Gradation from '@/components/Gradation'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementGradation',
        components: {
            HeaderElement,
            Breadcrumb,
            Gradation,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

