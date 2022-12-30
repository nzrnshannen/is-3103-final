<template>
    <header>
        <div class="">
            <nav>
               
                

                <div>
                    <ul class="" id="Menu1">
                        <li class="menu-item1" style=;>
                            <a class="" href="#Online-Payment">
                                <img src="../assets/img/onlinepayment.jpg" width="100%">
                                <div style="padding-left:4rem;">Online Payment</div>
                            </a>
                        </li>
                        <li class="menu-item1 centermenu1" >
                            <a class="" href="#Online-Membership">
                                <img src="../assets/img/onlinemembership.jpg" width="40%">
                                <div style="margin-left:-2.5rem;">Online Membership</div>
                            </a>
                        </li>
                        <li class="menu-item1">
                            <a class="" href="#E-Services" >
                                <img src="../assets/img/eservices.jpg">
                                <div style="padding-left:2.1rem;">E-Services</div>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
#Menu1 {
display: flex;
justify-content: space-around;
position:relative;
left:-3rem;

}

.menu-item1 {
    margin-top: 5rem;
    margin-bottom: -3rem;
}

.centermenu1 {
    position:relative;
    right: -3.3rem;
}

.menu-item1 div {
    padding-top: 1.3rem;
    font-size: 22px;
    font-weight:600;
}

.menu-item1 {
    transition: transform .5s ease;
  }

.menu-item1:hover {
    transform: scale(1.2);
}

.menu-item1 {
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