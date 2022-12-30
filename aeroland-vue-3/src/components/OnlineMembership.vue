<template>
    <Navbar/>
    <div class="break">
        <br>
    </div>

    <div class="online-membership-container">
        <div class="online-membership-content">
            <div class="online-membership-description">
                <h3>Online Membership Application</h3>
                <p>Becoming a member of Cebu CFI COOP has never been this easy and so convenient. Gone are the days when an applicant is required to personally visit a CFI office to undergo a scheduled seminar before he can apply for and become a member.</p>
                <p>Today, a prospective member need not have to leave his house to become a registered member. He can do this anytime and at one’s own convenience.</p>
                <p>The CFI just launched a new facility dubbed as the CFI Online Membership System. All that a prospective member has to do is visit the CFI’s website and through it.he can easily navigate himself into becoming a member through his fingertips.</p>
                <p>Of course, to qualify as a member he must be at least 18 years of age, a Filipino citizen, or if a foreigner but born a Filipino, must have a postal address in the Philippines.</p>
                <p>He should also be ready to upload in the system documents showing proof of identity, date of birth and place of residence or postal address in the Philippines.</p>
                <p>A word of caution, however. The online system will require the applicant to go through 4 tiered stages of activities which he must complete before he is allied to go to the next stage.</p>
            </div>
            <div class="online-membership-seminar">
                <img src="../assets/img/question.svg">
                <h6 style="margin-bottom:1.5rem"> How about the seminar?</h6>
                <p>Well, this is also provided in the online system. The applicant will be required to watch the 23-minute video presentation where the prospective member will be informed about what the cooperative stands for, what it can provide for its members and what a member is supposed to do for the cooperative.</p>
                <p>For a more detailed explanation of the new CFI facility, please watch the video below:</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vkwtloIkj4Y?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <br>
    <hr>
    <FooterMain/>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import FooterMain  from '../components/FooterMain.vue';

    export default{
        name: 'OnlineMembership',
        components: {
            Navbar,
            FooterMain
        }
    }
</script>

<style>
    .break{
        margin-bottom: 5rem;
    }

    .online-membership-container{
        background-color: rgba(247, 234, 217, 0.447);
        padding: 5rem;
    }

    .online-membership-content{
        margin-left: 2.5rem;
        background-color: white;
        margin-right: 2.5rem;
    }

    .online-membership-description{
        margin: 4rem;
    }
    
    .online-membership-description h3{
        padding: 5rem;
        margin-left: -5rem;
    }
    .online-membership-seminar{
        margin: 5rem;
        margin-left: 11rem;
        padding: 2rem;
    }

    .online-membership-seminar img{
        max-width: 5%;
        position: absolute;
        margin-left: -7rem;
        margin-top: -0.5rem;
    }

    .video iframe{
        width: 100%;
        margin-top: 3rem;
        margin-bottom: 6rem;
    }

    .online-membership-description p{
        font-size: 18px;
    }
</style>