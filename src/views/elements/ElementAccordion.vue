<template>
    <div class="main-container">
        <HeaderElement />

        <Breadcrumb>
            <template #breadcrumb>
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Accordions & Toggles</h2>
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="">Elements</router-link></li>
                        <li class="breadcrumb-item active">Accordions</li>
                    </ul>
                </div>
            </template>
        </Breadcrumb>

        <!-- accordion section start -->
        <div class="accordion-wrapper section-space--pb_90">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6">
                        <div class="faq-wrapper section-space--pt_90">
                            <div class="section-elements-title mb-30">
                                <h4>Accordions</h4>
                            </div>
                            <Accordion />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="faq-wrapper section-space--pt_90">
                            <div class="section-elements-title mb-30">
                                <h4>Toggles</h4>
                            </div>
                            <AccordionToggle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- accordion section end -->

        <!-- footer section -->
        <FooterMain class="border-top" />
        <OffcanvasSearchBox />
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import Accordion from '@/components/Accordion'
    import AccordionToggle from '@/components/AccordionToggle'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementAccordion',
        components: {
            HeaderElement,
            Breadcrumb,
            Accordion,
            AccordionToggle,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

