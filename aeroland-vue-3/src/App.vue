<template>
    <router-view />
</template>

<script>
    import WOW from "wow.js";
    export default {
        name: 'app',
        mounted(){
            new WOW().init();
        }
    }
</script>

