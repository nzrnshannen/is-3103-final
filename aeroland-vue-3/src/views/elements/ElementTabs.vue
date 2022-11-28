<template>
    <div class="main-container">
        <HeaderElement />

        <Breadcrumb>
            <template #breadcrumb>
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Tabs</h2>
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link to="/HomeBranding">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="">Elements</router-link></li>
                        <li class="breadcrumb-item active">Tabs</li>
                    </ul>
                </div>
            </template>
        </Breadcrumb>

        <div class="tabs-wrapper section-space--ptb_90">
            <div class="container">
                <TabOne />
            </div>
        </div>

        <TabTwo BgGradient="bg-gradient" />

        <FooterMain/>
        <OffcanvasSearchBox />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import TabOne from '@/components/TabOne'
    import TabTwo from '@/components/TabTwo'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementTabs',
        components: {
            HeaderElement,
            Breadcrumb,
            TabOne,
            TabTwo,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

