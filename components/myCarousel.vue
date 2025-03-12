<template>


<div class="bg-[#1F2833] bg-opacity-60 max-[450px]:h-[1230px] max-[540px]:h-[1330px] max-[620px]:h-[1430px]  h-[1500px] md:h-[1600px] xl:h-[950px] ">


  <div >
    <div class="w-full h-[900px] bg-black">
      <v-carousel height="900" progress="primary" class="bg-black" hide-delimiters cycle interval="10000" :show-arrows="false">
        <v-carousel-item v-for="(image, index) in shaders" :key="index" >
          <v-sheet height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <img :src="image" class="object-cover w-full h-full" alt="Shader Image" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
</div>
  </div>


  <div class="absolute top-[130px] left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center ">
      
      <!-- Logo -->
      <img src="/img/logo.png" alt="Genesis" class="w-[500px] md:w-[500px] " />


      <!-- Clipboard -->
      <Clipboard />
      
      <div class="backdrop-contrast-125-90 mt-10 bg-opacity-80 w-full pt-5  max-[450px]:h-[830px] max-[540px]:h-[930px]  max-[620px]:h-[980px] max-w-[600px] h-[1000px] md:h-[1050px] xl:h-[400px] bg-[#1F2833] rounded-[30px] md:rounded-[50px] items-top justify-center  text-white text-3xl">
        <div class="w-full text-center text-[35px]">
          Actualités

        </div>



        
      </div>

      <div class="relative max-[450px]:top-[-770px] max-[540px]:top-[-870px] max-[620px]:top-[-920px] top-[-930px] md:top-[-1000px] xl:top-[-340px]">
  <div class="flex relative xl:flex-row flex-col">

    <div class="relative xl:left-[-30px] h-[250px] xl:w-[310px] text-white my-5 xl:mx-2 xl:rounded-l-[40px]">
      <NuxtImg src="img/minecraftShaders1.png" class="object-cover h-full xl:rounded-l-[40px]"/>
      <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent flex items-end justify-center xl:rounded-l-[40px]">
        <div class="text-white text-[25px] mb-2 text-center leading-9 mx-10">
          Une nouvelle maison va vite spawn venez
        </div>
      </div>
    </div>

    <div class="relative xl:w-[310px] h-[250px] text-white my-5 rounded-lg">
      <NuxtImg src="img/minecraftShaders2.png"  class="rounded-lg h-full object-cover"/>
      <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent flex items-end justify-center rounded-lg">
        <div class="text-white text-[25px] mb-2 text-center leading-9 mx-10">
          Une nouvelle maison va vite spawn venez
        </div>
      </div>
    </div>

    <div class="relative xl:right-[-30px] h-[250px] xl:w-[310px] text-white my-5 xl:mx-2 xl:rounded-r-[40px]">
      <NuxtImg src="img/minecraftShaders3.png" class="object-cover h-full xl:rounded-r-[40px]"/>
      <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent flex items-end justify-center xl:rounded-r-[40px]">
        <div class="text-white text-[25px] mb-2 text-center leading-9 mx-10">
          Une nouvelle maison va vite spawn venez
        </div>
      </div>
    </div>

    

  </div>
    <div class="text-center text-white text-[25px]">
        Voir plus

      </div>
</div>

      <!-- Discord Button -->
      <!-- <button class="button x">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="white"></path>
        </svg>
        notre discord
      </button> -->

    </div>



  </div>



</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const shaders = ref([
  "/img/minecraftShaders1.PNG",
  "/img/minecraftShaders2.PNG",
  "/img/minecraftShaders3.PNG",
]);



</script>

<style>
/* Agrandir les flèches */
.carousel__prev{
  display: none;

}
.carousel__next {
  width: 60px;
  height: 60px;
  font-size: 24px;
}

/* Agrandir les boutons de pagination */
.carousel__pagination-button {
  display: none;

}

/* Supprimer la flèche directionnelle en bas */
.carousel__icons {
  display: none;
}

.button.x {
  max-width: 202px;
  display: flex;
  padding: 0.5rem 1.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(86, 98, 246, 0.25);
  gap: 0.75rem;
  color: #ffffff;
  background-color: #5662f6;
  cursor: pointer;
  transition: all 0.6s ease;
  text-decoration: none;
}

.button.x svg {
  height: 24px;
  width: 24px;
  fill: #fff;
  margin-right: 0.5rem;
}

.button.x:hover {
  background-color: rgb(119, 133, 204);
  box-shadow: 0 2px 4px rgba(119, 133, 204, 0.1);
}

.button.x:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
}

.button.x:active {
  opacity: 0.8;
}

@media (max-width: 202px) {
  .button.x {
    max-width: 100%;
  }
}

</style>
