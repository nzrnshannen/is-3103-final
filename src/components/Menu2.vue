<template>
    <header>
        <div class="">
            <nav>
               
                

                <div>
                    <ul class="" id="Menu">
                        <li class="menu-item">
                            <a class="" href="#Calculator">
                                <img src="../assets/img/calculator.jpg">
                                <div style="">Calculator</div>
                            </a>
                        </li>
                        <li class="menu-item centermenu" >
                            <a class="" href="#Forms">
                                <img src="../assets/img/forms1.jpg">
                                <div style="position:relative; left:-5px;">Forms</div>
                            </a>
                        </li>
                        <li class="menu-item centermenu" >
                            <a class="" href="/cfi-videos">
                                <img src="../assets/img/cfi-videos.jpg" width="">
                                <div style="position:relative; left:-14px;">CFI Videos</div>
                            </a>
                        </li>
                        <li class="menu-item centermenu" >
                            <a class="" href="/helpdesk">
                                <img src="../assets/img/helpdesk.jpg" width="">
                                <div style="">Help Desk</div>
                            </a>
                        </li>
                        <li class="menu-item centermenu" >
                            <a class="" href="#mmaf">
                                <img src="../assets/img/mmaf.jpg" width="">
                                <div style="position:relative; left:-2.5rem;">MMA Claims & Tariff</div>
                            </a>
                        </li>
                        
                       
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
#Menu {
display: flex;
justify-content: space-around;
margin-top: 8rem;
gap: -2rem;
position:relative;
left:1.7rem;

}

.menu-item {
    margin-top: 5rem;
    margin-bottom: -3rem;
}

.menu-item a div {
    padding-top: 0.8rem;
    font-size: 17px;
    font-weight:550;
    position:relative;
    left:-8px;
    
}

.menu-item {
    transition: transform .5s ease;
  }

.menu-item:hover {
    transform: scale(1.2);
}

.menu-item {
padding: 0rem -2rem 0rem -2rem;
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