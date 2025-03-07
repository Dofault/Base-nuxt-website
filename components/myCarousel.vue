<template>
  <div >
    <div class="w-full bg-slate-200"></div>

    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :transition="800"
      :autoplay="10000"
      :mouse-drag="false"
      :touch-drag="false"
      :keyboard="false"
      class="w-full h-[400px]"
    >
      <Slide v-for="(shader, index) in shaders" :key="index">
        <div class="w-full h-full">
          <img class="w-full h-full object-cover border-black" :src="shader" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
  <img src="/img/logo.png" alt="Genesis" class="absolute top-32 left-1/2 transform -translate-x-1/2 z-10 w-[500px]" />

</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const shaders = ref([
  "/img/minecraftShaders1.PNG",
  "/img/minecraftShaders2.PNG",
  "/img/minecraftShaders3.PNG",
])
</script>

<style>
/* Agrandir les flèches */
.carousel__prev,
.carousel__next {
  width: 60px;
  height: 60px;
  font-size: 24px;
}

/* Agrandir les boutons de pagination */
.carousel__pagination-button {
  width: 40px;
  height: 8px;
}

/* Supprimer la flèche directionnelle en bas */
.carousel__icons {
  display: none;
}
</style>
