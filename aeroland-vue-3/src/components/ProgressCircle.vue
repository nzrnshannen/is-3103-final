<template>
    <div class="row">
        <div class="col-md-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="80"
                                        :show-percent="true"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#f76b1c',
                                            stopColor: '#fad961'
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
                </div>
                <div class="feature-list-progress__info">
                    <h6 class="feature-list-progress__title mb-20">Digital Marketing</h6>
                    <ul class="feature-list-progress__list">
                        <li>Keyword rank tracking</li>
                        <li>Website audit</li>
                        <li>Marketing, SEO</li>
                        <li>Social Media</li>
                        <li>Social Media</li>
                        <li>On-page SEO Audit</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner chart-progress__inner--blue">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="75"
                                        :show-percent="true"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#5E61E7',
                                            stopColor: '#9C7AF2'
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
                <div class="feature-list-progress__info">
                    <h6 class="feature-list-progress__title mb-20">Digital Marketing</h6>
                    <ul class="feature-list-progress__list">
                        <li>Digital Marketing</li>
                        <li>Website audit</li>
                        <li>Marketing, SEO</li>
                        <li>Social Media</li>
                        <li>Social Media</li>
                        <li>On-page SEO Audit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "vue3-circle-progress/dist/circle-progress.css";
    import CircleProgress from "vue3-circle-progress";

    export default {
        components: {
            CircleProgress
        }
    }
</script>