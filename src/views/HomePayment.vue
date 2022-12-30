<template>
    <div class="main-container">
		<HeaderPayment />
		<HeroPayment />
        <PaymentFeatureSection />
        <PaymentStep />
        <PaymentPricingWrapper />
        <PaymentNewsletter />
        <CarouselStartup />
        <FooterMain />
    </div>
</template>

<script>
    import HeaderPayment from '@/components/sections/HeaderPayment'
    import HeroPayment from '@/components/sections/HeroPayment'
    import PaymentFeatureSection from '@/components/sections/PaymentFeatureSection'
    import PaymentStep from '@/components/sections/PaymentStep'
    import PaymentPricingWrapper from '@/components/sections/PaymentPricingWrapper'
    import PaymentNewsletter from '@/components/sections/PaymentNewsletter'
    import CarouselStartup from '@/components/CarouselStartup'
    import FooterMain from '@/components/FooterMain'

    export default {
        name: 'HomePayment',
        components: {
            HeaderPayment,
            HeroPayment,
            PaymentFeatureSection,
            PaymentStep,
            PaymentPricingWrapper,
            PaymentNewsletter,
            CarouselStartup,
            FooterMain
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/_variabls.scss';
    @import '../assets/scss/page-section/_payment.scss';
</style>

