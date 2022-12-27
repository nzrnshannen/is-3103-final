import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/elements/404.vue')
    },
    {
        path: '/',
        name: 'HomeBranding',
        component: () => import(/* webpackChunkName: "HomeBranding" */ '../views/HomeBranding.vue'),
    },
    {
        path: '/sass',
        name: 'HomeSass',
        component: () => import(/* webpackChunkName: "HomeSass" */ '../views/HomeSass.vue'),
    },
    {
        path: '/app-landing',
        name: 'HomeAppLanding',
        component: () => import(/* webpackChunkName: "HomeAppLanding" */ '../views/HomeAppLanding.vue'),
    },
    {
        path: '/showcase',
        name: 'HomeShowcase',
        component: () => import(/* webpackChunkName: "HomeShowcase" */ '../views/HomeShowcase.vue'),
    },
    {
        path: '/ebook',
        name: 'HomeEbook',
        component: () => import(/* webpackChunkName: "HomeEbook" */ '../views/HomeEbook.vue'),
    },
    {
        path: '/clinic',
        name: 'HomeClinic',
        component: () => import(/* webpackChunkName: "HomeClinic" */ '../views/HomeClinic.vue'),
    },
    {
        path: '/payment',
        name: 'HomePayment',
        component: () => import(/* webpackChunkName: "HomePayment" */ '../views/HomePayment.vue'),
    },
    {
        path: '/agency',
        name: 'HomeAgency',
        component: () => import(/* webpackChunkName: "HomeAgency" */ '../views/HomeAgency.vue'),
    },
    {
        path: '/software',
        name: 'HomeSoftware',
        component: () => import(/* webpackChunkName: "HomeSoftware" */ '../views/HomeSoftware.vue'),
    },
    {
        path: '/digital-store',
        name: 'HomeDigitalStore',
        component: () => import(/* webpackChunkName: "HomeDigitalStore" */ '../views/HomeDigitalStore.vue'),
    },
    {
        path: '/start-up',
        name: 'HomeStartUp',
        component: () => import(/* webpackChunkName: "HomeStartUp" */ '../views/HomeStartUp.vue'),
    },
    {
        path: '/product-showcase',
        name: 'HomeProductShowcase',
        component: () => import(/* webpackChunkName: "HomeProductShowcase" */ '../views/HomeProductShowcase.vue'),
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: () => import(/* webpackChunkName: "ComingSoon" */ '../views/ComingSoon.vue'),
    },
    {
        path: '/element-tab',
        name: 'ElementTabs',
        component: () => import(/* webpackChunkName: "ElementTabs" */ '../views/elements/ElementTabs.vue'),
    },
    {
        path: '/element-accordion',
        name: 'ElementAccordion',
        component: () => import(/* webpackChunkName: "ElementAccordion" */ '../views/elements/ElementAccordion.vue'),
    },
    {
        path: '/element-gradation',
        name: 'ElementGradation',
        component: () => import(/* webpackChunkName: "ElementGradation" */ '../views/elements/ElementGradation.vue'),
    },
    {
        path: '/element-box-icon',
        name: 'ElementBoxIcon',
        component: () => import(/* webpackChunkName: "ElementBoxIcon" */ '../views/elements/ElementBoxIcon.vue'),
    },
    {
        path: '/element-buttons',
        name: 'ElementButtons',
        component: () => import(/* webpackChunkName: "ElementButtons" */ '../views/elements/ElementButtons.vue'),
    },
    {
        path: '/element-cta',
        name: 'ElementCta',
        component: () => import(/* webpackChunkName: "ElementCta" */ '../views/elements/ElementCta.vue'),
    },
    {
        path: '/element-pricing-box',
        name: 'ElementPricingBox',
        component: () => import(/* webpackChunkName: "ElementPricingBox" */ '../views/elements/ElementPricingBox.vue'),
    },
    {
        path: '/element-progress-bar',
        name: 'ElementProgressBar',
        component: () => import(/* webpackChunkName: "ElementProgressBar" */ '../views/elements/ElementProgressBar.vue'),
    },
    {
        path: '/element-progress-circle',
        name: 'ElementProgressCircle',
        component: () => import(/* webpackChunkName: "ElementProgressCircle" */ '../views/elements/ElementProgressCircle.vue'),
    },
    {
        path: '/element-team-member',
        name: 'ElementTeamMember',
        component: () => import(/* webpackChunkName: "ElementTeamMember" */ '../views/elements/ElementTeamMember.vue'),
    },
    {
        path: '/element-testimonial',
        name: 'ElementTestimonial',
        component: () => import(/* webpackChunkName: "ElementTestimonial" */ '../views/elements/ElementTestimonial.vue'),
    },
    {
        path: '/portfolio-grid',
        name: 'PortfolioGrid',
        component: () => import(/* webpackChunkName: "PortfolioGrid" */ '../views/portfolio/PortfolioGrid.vue'),
    },
    {
        path: '/portfolio-grid-wide',
        name: 'PortfolioGridWide',
        component: () => import(/* webpackChunkName: "PortfolioGridWide" */ '../views/portfolio/PortfolioGridWide.vue'),
    },
    {
        path: '/portfolio-grid-caption',
        name: 'PortfolioGridCaption',
        component: () => import(/* webpackChunkName: "PortfolioGridCaption" */ '../views/portfolio/PortfolioGridCaption.vue'),
    },
    {
        path: '/portfolio-grid-caption-wide',
        name: 'PortfolioGridCaptionWide',
        component: () => import(/* webpackChunkName: "PortfolioGridCaptionWide" */ '../views/portfolio/PortfolioGridCaptionWide.vue'),
    },
    {
        path: '/portfolio-details',
        name: 'PortfolioDetails',
        component: () => import(/* webpackChunkName: "PortfolioDetails" */ '../views/portfolio/PortfolioDetails.vue'),
    },
    {
        path: '/portfolio-details-two',
        name: 'PortfolioDetailsTwo',
        component: () => import(/* webpackChunkName: "PortfolioDetailsTwo" */ '../views/portfolio/PortfolioDetailsTwo.vue'),
    },
    {
        path: '/blog-list-large-image',
        name: 'BlogListLargeImage',
        component: () => import(/* webpackChunkName: "BlogListLargeImage" */ '../views/blog/BlogListLargeImage.vue'),
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        component: () => import(/* webpackChunkName: "BlogDetails" */ '../views/blog/BlogDetails.vue'),
    },

    {
        path: '/view-all-articles',
        name: 'ViewAllArticles',
        component: () => import(/* webpackChunkName: "BlogDetails" */ '../components/sections/ViewAllArticles.vue')
    },

    {
        path: '/homepage',
        name: 'homepage',
        component: () => import('../views/HomeBranding.vue'),
    },

    {
        path: '/article-1',
        name: 'Article1',
        component: () => import('../components/Article1.vue'),
    },

    {
        path: '/article-2',
        name: 'Article2',
        component: () => import('../components/Article2.vue'),
    },

    {
        path: '/article-3',
        name: 'Article3',
        component: () => import('../components/Article3.vue'),
    },

    {
        path: '/article-4',
        name: 'Article4',
        component: () => import('../components/Article4.vue'),
    },

    {
        path: '/article-5',
        name: 'Article5',
        component: () => import('../components/Article5.vue'),
    },

    {
        path: '/article-6',
        name: 'Article6',
        component: () => import('../components/Article6.vue'),
    },

    {
        path: '/article-7',
        name: 'Article7',
        component: () => import('../components/Article7.vue'),
    },

    {
        path: '/article-8',
        name: 'Article8',
        component: () => import('../components/Article8.vue'),
    },

    {
        path: '/article-9',
        name: 'Article9',
        component: () => import('../components/Article9.vue'),
    },

    {
        path: '/about-company-profile',
        name: 'CompanyProfile',
        component: () => import('../components/CompanyProfile.vue'),
    },

    {
        path: '/about-financial-report',
        name: 'FinancialReport',
        component: () => import('../components/FinancialReport.vue'),
    },

    {
        path: '/membership',
        name: 'Membership',
        component: () => import('../components/Membership.vue'),
    },

];
  
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
  
export default router;
