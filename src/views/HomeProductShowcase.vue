<template>
	<div class="main-container">
		<HeaderProductShowcase />
		<HeroProductShowcase />
		<AboutProductShowcase />
		<ProductOverview />
		<ProductShowcaseFeature />
		<ProductShowcaseVideo />
		<ProductShowcaseWorkProgress />
		<TestimonialThree />
		<BrandLogoCarouselTwo brandlogo="bg-gray-2 section-space--pb_90" />
        <FooterMain />
	</div>
</template>

<script>
	import HeaderProductShowcase from "../components/sections/HeaderProductShowcase";
	import HeroProductShowcase from "../components/sections/HeroProductShowcase";
	import AboutProductShowcase from "../components/sections/AboutProductShowcase";
	import ProductOverview from "../components/sections/ProductOverview";
	import ProductShowcaseFeature from "../components/sections/ProductShowcaseFeature";
	import ProductShowcaseVideo from "../components/sections/ProductShowcaseVideo";
	import ProductShowcaseWorkProgress from "../components/sections/ProductShowcaseWorkProgress";
	import TestimonialThree from "../components/TestimonialThree";
	import BrandLogoCarouselTwo from "../components/BrandLogoCarouselTwo";
	import FooterMain from "../components/FooterMain";

	export default {
		name: "HomeProductShowcase",
		components: {
			HeaderProductShowcase,
			HeroProductShowcase,
			AboutProductShowcase,
			ProductOverview,
			ProductShowcaseFeature,
			ProductShowcaseVideo,
			ProductShowcaseWorkProgress,
			TestimonialThree,
			BrandLogoCarouselTwo,
			FooterMain
		}
	};
</script>
