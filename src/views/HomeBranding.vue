<template>
    <div class="main-container">
       
       
       
        <Navbar />
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
        
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <HeroBranding />
             <div class="box-image-area section-space--ptb_120" id="about">
                <div class="container">
                    <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                        <h2 class="section-title mb-15">Expand Your Business</h2>
                        <span class="section-text">Plan ahead to make progress and lead the trend.</span>
                    </div>
                    <AboutExpand />
                </div>
            </div>
      
            <Menu1 />
           
            <Menu2 />
            <br>
        <br>
        <br>
        <br>
            <!--HeroSoftware (Advisory/Announcement)-->
            <HeroSoftware />
            <!--HeroSofware (Advisory/Announcement)-->
          
            <NewsArticlePreview/>
           
            <FooterMain />
           
            <OffcanvasSearchBox />
        </div>

    </div>
   
</template>

<style>

.break{
    margin-bottom:4rem;
}

</style>

<script>
    import Logo from '../components/Logo.vue'
    import Menu1 from '../components/Menu1.vue'
    import Menu2 from '../components/Menu2.vue'
    import Navbar from '../components/Navbar.vue'
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
    import HeroSoftware from '../components/HeroSoftware.vue'
    import NewsArticlePreview from '../components/sections/NewsArticlePreview.vue'
    
    export default {
        name: 'HomeBranding',
        components: {
            Logo,
            Navbar,
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
            HeroSoftware,
            NewsArticlePreview,   

        }
  }   
  
</script>