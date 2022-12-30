<template>
	<div class="main-container">
		<HeaderShowcase />
		<HeroAppShowcase />
		<BrandLogoCarousel />
		<FeatureAppShowcase />
		<Download />
		<ThreeStepProcessWrap />
		<AppShowcaseNewsletter />
        <FooterAppShowcase />
	</div>
</template>

<script>
	import HeaderShowcase from "../components/HeaderShowcase";
	import HeroAppShowcase from "../components/HeroAppShowcase";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import FeatureAppShowcase from "../components/FeatureAppShowcase";
	import Download from "../components/Download";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterAppShowcase from "../components/FooterAppShowcase";

	export default {
		name: "HomeShowcase",
		components: {
			HeaderShowcase,
			HeroAppShowcase,
			BrandLogoCarousel,
			FeatureAppShowcase,
			Download,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterAppShowcase
		}
	};
</script>

