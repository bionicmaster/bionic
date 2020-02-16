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
                    <a href="weapons">
                        WEAPON CATALOG
                    </a>
                </li>
            </ul>
        </nav>

        <!-- Page Content -->
        <div id="content" class="relative" style="max-height: 525px">

            <!-- imagen de fondo -->
            <img src="/img/alien.png" class="img-fluid bg-landing img-landing">
            <div class="absolute-img">
                <img    src="/img/group.svg" class="img-fluid style-img-group" 
                        width="100" height="100">
            </div>

            <!-- btn play and text -->
            <div class="absolute-play-text">
                
                <div class="border-div">
                    <div class="absolute-play">
                        <img    src="/img/play.svg" class="img-fluid ml-3" 
                                width="35" height="35">
                        <span class="text-white small text-web">
                            WEB 
                            <span  class="block text-white text-trailer font-weight-bold">
                                TRAILER
                            </span>
                        </span>
                    </div>

                    <div class="absolute-text-worlds">
                        <span class="text-white font-weight-bold ml-3">
                            BUILDING BETTER WORLDS
                        </span>
                        <span class="block small text-worlds col-md-5 ml-3">
                            Durante siglos, cientificos de la corporación Weyland-Yulani han
                            monitorizado el comportamiento de una forma de vida alienigena tan
                            poderosa que su potencial como recurso militar parece ser ilimitado.
                        </span>
                    </div>
                </div>

            </div>

            <!-- logo del menu -->
            <div class="absolute-menu">
                <i class="fas fa-align-right text-white fa-2x" id="menu" @click="menu()">
                </i>
            </div>

            <!-- logos red social -->
            <div class="absolute-logos-social">
                <i class="fab fa-facebook-f text-white fa-1x">
                </i>
                <i class="fab fa-instagram text-white fa-1x ml-3">
                </i>
            </div>

            <!-- more info -->
            <div class="accordion md-accordion more_info" id="more_info" role="tablist" aria-multiselectable="true">

                <div class="card more_info">
                    <div class="card-header" role="tab" id="headingTwo1">
                        <a class="collapsed float-right text-white" data-toggle="collapse" data-parent="#more_info" href="#collapseTwo1"
                            aria-expanded="false" aria-controls="collapseTwo1">
                            <h5 class="mb-0">
                                <i class="fas fa-angle-down rotate-icon">
                                </i>
                                MORE INFO
                            </h5>
                        </a>
                    </div>

                    <div id="collapseTwo1" class="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                    data-parent="#more_info">
                        <div class="card-body text-light">
                            <ul class="list-group list-group-horizontal-md">
                                <li class="list-group-item text-white bg-weapons">
                                    LEGAL
                                </li>
                                <li class="list-group-item text-white bg-weapons">
                                    CORPORATE
                                </li>
                                <li class="list-group-item text-white bg-weapons">
                                    FOUNDATION
                                </li>
                                <li class="list-group-item text-white bg-weapons">
                                    SPACE
                                </li>
                                <li class="list-group-item text-white bg-weapons">
                                    JOBS
                                </li>
                                <li class="list-group-item text-white bg-weapons">
                                    INTERNATIONAL
                                </li>
                            </ul>
                            <span class="small text-light">
                                Weyland Industries was a British industrial business that existed 
                                in the twenty-first century. Along with the Japanese Yutani Corporation, 
                                it was one of the antecedents to the Weyland-Yutani conglomerate. 
                                The eponymous Charles Bishop Weyland was the chairman of Weyland 
                                Industries during the early 21st Century.
                            </span>
                        </div>
                    </div>
                </div>

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
