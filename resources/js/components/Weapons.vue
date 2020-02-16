<template>
	<div class="container wrapper">

        <!-- Menu -->
        <nav id="menubar" class="">

            <div class="py-4">
                <h3 class="mt-5 text-center">
                    Pages
                </h3>
            </div>

            <ul class="ul-menu">
                <li class="">
                    <a href="/" class="">
                        Home
                    </a>
                </li>
                <li class="mt-1">
                    <a href="weapons" class="">
                        WEAPON CATALOG
                    </a>
                </li>
            </ul>
        </nav>

        <!-- Page Content -->
        <div id="content" class="relative">

            <!-- imagen de fondo -->
            <img src="/img/weapons.png" class="img-fluid bg-weapons img-wapons">

            <!-- logo del menu -->
            <div class="absolute-menu">
                <i class="fas fa-align-right text-white fa-2x" id="menu" @click="menu()">
                </i>
                <img    src="/img/group.svg" 
                        class="img-fluid absolute-img-weapons ml-3" 
                        width="70" height="70">
            </div>

            <!-- texto en medio -->
                
            <div class="absolute-text-enmedio col-md-5">
                <span class="ml-5">
                    <span class="font-weight-bold text-white title-weapons">
                        New Arrivals                    
                    </span>
                    <span class="small text-light block ml-5 mt-2">
                        Mechanical engineering is one of the broadest engineering 
                        disciplines. Mechanical engineers research, design, develop,
                        build, and test mechanical and thermal sensors and devices, 
                        including tools, engines, and machines.
                    </span>
                </span>
            </div>

        </div>

    </div>
</template>

<script>

	export default {
		props: [],
		components: {
		},
		data() {
			return {
				
			}
		},
		created(){

		},
		methods: {

            menu() {
                $('#menubar').toggleClass('active');
            }

		},
		mounted() {

        }
		
	}

	
</script>
                
