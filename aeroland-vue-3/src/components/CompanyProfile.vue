<template>
    <Navbar/>
    <div class="break">
        <br>
    </div>
    
    <div class="company-profile-container">
        <div class="company-profile-card">
            <hr>
            <h1>Company Profile</h1>
            <p>The Cebu CFI Community Cooperative  (CFI) is an incorporated cooperative existing since 1970. It is duly registered as a Cooperative in Good Standing with the Cooperative Development Authority (CDA).</p>
            <p>CFI is a members-only incorporated entity which has over the years, grown to more than 155,000 members and continues to grow by the day because of the benefits enjoyed from membership.</p>
            <p>A Board of Directors composed of 9 members and headed by a Chairman governs the cooperative. Each member of the Board has a term of 2 years and is elected by the membership during an annual general membership meeting.</p>
            <p>It is managed by a set of officers headed by a CEO or President and 300 employees working in its Central office in Cebu and 30 branches and satellite offices nationwide. CFI is principally capitalized by equity contributions of members in the form of share capital and money placements of members in the form of savings and time deposits.</p>
            <p>In turn, its capital base is principally used for lending to members at more liberal terms and affordable rates compared to private money lenders in the country. All capital surplus of the cooperative from its operations are returned to members in the form of dividends, patronage refunds and interests.</p>
            <p>CFI also has a health fund that provides members a very affordable option to answer for their medical and hospital bills in the event they get sick, injured or otherwise, hospitalized.</p>
            <hr>
        </div>
    </div>

    <hr>
    <FooterMain/>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import FooterMain  from '../components/FooterMain.vue';

    export default{
        name: 'CompanyProfile',
        components: {
            Navbar,
            FooterMain
        }
    }
</script>

<style>
    .break{
        margin-bottom: 4rem;
    }

    .company-profile-container{
        display: block;
        background-color: hwb(0 100% 0%);
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        padding: 6rem;
    }

    .company-profile-container p, h1{
        padding: 0.5rem;
    }

    .company-profile-container p{
        font-size: large;
    }

    .company-profile-container h1{
        margin: 0.5rem;
        margin-bottom: 1rem;
        position: relative;
    }




</style>