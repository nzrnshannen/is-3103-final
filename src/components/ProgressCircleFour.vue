<template>
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner chart-progress__inner--blue">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="75"
                                        :show-percent="false"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#5E61E7',
                                            stopColor: '#9C7AF2'
                                        }"
                                    />
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> 
                                            <span class="chart-number">01</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="80"
                                        :show-percent="false"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#f76b1c',
                                            stopColor: '#fad961'
                                        }"
                                    />
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> 
                                            <span class="chart-number">02</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner chart-progress__inner--blue">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="75"
                                        :show-percent="false"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#5E61E7',
                                            stopColor: '#9C7AF2'
                                        }"
                                    />
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> <span class="chart-icon"><span class="icon"><i class="fal fa-cogs"></i></span></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <circle-progress
                                        :is-gradient="true"
                                        :percent="80"
                                        :show-percent="false"
                                        :border-width="5"
                                        :gradient="{
                                            angle: 120,
                                            startColor: '#f76b1c',
                                            stopColor: '#fad961'
                                        }"
                                    />
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> <span class="chart-icon"><span class="icon"><i class="fab fa-vuejs"></i></span></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
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