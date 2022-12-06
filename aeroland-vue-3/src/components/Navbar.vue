<template>
    
<!-- Replace file name for merging later
     reason: the file is named Navbar which contradicts, because this is suppose to be the header -->

    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">

        
        
        <div class="container-fluid container-fluid--cp-150">
            <nav class="navbar navbar-expand-lg" id="navbar-example2">
                <router-link to="/">
                    <img src="../assets/img/cfi-logo.jpg" class="cfi-icon" alt="logo" width="450" height="105">
                </router-link>
                <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="header-config-wrapper btn-group">
                    
                    <router-link to="" id="phone" class=" hire-btn d-none d-xl-block"><img src="../assets/img/PhoneIcon.png"><span><div class="call">Call us!</div><div>255-25-25</div></span></router-link>
                </div>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    
                </div>
            </nav>
        </div>

        <hr>

    </header>
</template>

<style>
#phone:hover {
    transform: scale(1.1);
}

#phone span {
    display:inline-block;
    padding-left:1px;
    padding-top: 17px;
    
   
    

    
}

#phone img {
    width:40%;
    margin-top:-17px;
    margin-left: 19px;
    
}


#phone span .call {
margin-bottom: -6px;
margin-left: 10px;
margin-top: 25px;

font-weight: 500;
color: black;
}

.cfi-icon {
        margin-top: 18px;
}
</style>


<script>
    export default {
        data (){
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            menuCollapseOnLinkClick() {
                document.getElementById('navbarSupportedContent').classList.remove('show')
            }
        },
    }
</script>

