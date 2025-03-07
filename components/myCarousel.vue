<template>
  <div class="h-[1200px] z-5">
    <div class="w-full bg-slate-200 z-5"></div>

    <Carousel :items-to-show="1" :wrap-around="true">
      <Slide v-for="slide in 2" :key="slide">
        <div class="carousel__item w-full h-[400px]">
          <img class="w-full h-full object-cover border-black" src="/img/minecraftShaders1.PNG" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style>
.carousel__slide {
  @apply bg-white;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
