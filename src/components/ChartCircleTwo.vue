<template>
    <div class="feature-list-progress d-block">
        <div class="app-showcase-progress__title">
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
                                    <span class="chart-number"> {{ circleValue }} </span>
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
</template>

<script>
    import "vue3-circle-progress/dist/circle-progress.css";
    import CircleProgress from "vue3-circle-progress";

    export default {
        components: {
            CircleProgress
        },
        props: {
            circleValue: String
        }
    }
</script>