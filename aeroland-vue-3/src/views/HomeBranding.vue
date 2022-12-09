<template>
    <div class="main-container">
       
        <Logo />
        <!-- logo above the navbar -->
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <HeroBranding />
            <Menu1/>
            <!-- Menu1 Below the Head Banner -->
            <Menu2/>
            <!-- Menu2 Below Menu1 -->
           
           

            
            
            
        </div>

    </div>
   
</template>


<script>
    import Logo from '../components/Logo.vue'
    import Menu1 from '../components/Menu1.vue'
    import Menu2 from '../components/Menu2.vue'
    import HeroBranding from '../components/HeroBranding'
    import AboutExpand from '../components/AboutExpand'
    import FeatureList from '../components/FeatureList'
    import RequireList from '../components/RequireList'
    import FeatureTwo from '../components/FeatureTwo'
    import ProgressCircle from '../components/ProgressCircle'
    import CurveShape from '../components/CurveShape'
    import Pricing from '../components/Pricing'
    import BrandLogo from '../components/BrandLogo'
    import Newsletter from '../components/Newsletter'
    import FooterMain from '../components/FooterMain'
    import OffcanvasSearchBox from '../components/OffcanvasSearchBox'
    import ThreeStepProcessWrap from '../components/ThreeStepProcessWrap'
    import TestimonialTwo from '../components/TestimonialTwo'
    import TestimonialThree from '../components/TestimonialThree'
    import TestimonialOne from '../components/TestimonialOne'
    import TestimonialFour from '../components/TestimonialFour'
    import TeamTwo from '../components/TeamTwo'
    import TeamOne from '../components/TeamOne'
    import TabTwoContentOne from '../components/TabTwoContentOne'
    import TabTwo from '../components/TabTwo'
    import TabThree from '../components/TabThree'
    import TabOne from '../components/TabOne'
    import TabContentOne from '../components/TabContentOne'
    import TabContentTwo from '../components/TabContentTwo'
    import TabContentThree from '../components/TabContentThree'
    import SideBarBlog from '../components/SidebarBlog.vue'
    import Investment from '../components/sections/Investment.vue'
    
    export default {
        name: 'HomeBranding',
        components: {
            Logo,
            Menu1,
            HeroBranding,
            AboutExpand,
            FeatureList,
            RequireList,
            FeatureTwo,
            ProgressCircle,
            CurveShape,
            Pricing,
            BrandLogo,
            Newsletter,
            FooterMain,
            OffcanvasSearchBox,           
            ThreeStepProcessWrap,
            TestimonialTwo,
            TestimonialThree,
            TestimonialOne,
            TestimonialFour,
            TeamTwo,
            TeamOne,
            TabTwoContentOne,
            TabTwo,
            TabThree,
            TabOne,
            TabContentOne,
            TabContentTwo,
            TabContentThree,
            SideBarBlog,
            Menu2,
            Investment,

            
        }
    }
</script>