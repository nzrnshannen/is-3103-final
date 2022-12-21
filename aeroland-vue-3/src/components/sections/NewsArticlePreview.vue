<template>
    <div class="pricing-table-area section-space--ptb_120" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60">
                        <h2 class="section-title font-width-light wow move-up">News & Articles</h2>
                        <br>
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">View All Articles</h6>
                    </div>
                </div>
            </div>
            <!-- pricing component -->
            <PricingFour />
        </div>
    </div>
</template>

<script>
    import PricingFour from '@/components/PricingFour'

    export default {
        name: 'ClinicPricing',
        components: {
            PricingFour
        }
    };
</script>