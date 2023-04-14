<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
  export default {
    name: 'PortfolioPage',
    components: {
    Carousel,
    Slide,
    Navigation,
  },
  data(){
    return{
      hovered: null,
      slides:
      [
        {
        image: '../../public/img/cane.jpg',
        description: 'Immagine cane',
        },
        {
        image: '../../public/img/cane.jpg',
        description: 'Immagine gatto',
        },
        {
        image: '../../public/img/cane.jpg',
        description: 'Immagine ciao',
        },
        {
        image: '../../public/img/cane.jpg',
        description: 'Immagine e',
        },
        {
        image: '../../public/img/cane.jpg',
        description: 'Immagine sdfsdfsd',
        },
    ]
    }
  }
  }
</script>
<template lang="">
    <div class="portfolio_cont">
        <h2>
            Portfolio
        </h2>
    </div>
    <carousel :items-to-show="1.5">
    <slide v-for="(item, index) in slides" :key="index">
     <div>
      <img :src="item.image">
      {{item.description}}
     </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<style lang="scss" scoped>
    @use "../styles/partials/variables" as *;

.portfolio_cont{
    color: $font_color;

}

</style>