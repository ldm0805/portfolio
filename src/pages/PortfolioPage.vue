<script>
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { store } from "../store";
export default {
  name: "PortfolioPage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      store,
      hovered: null,

      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "center",
        },
      },
    };
  },
};
</script>
<template lang="">
  <div class="portfolio_cont">
    <h2>Portfolio</h2>
    </div>
  <carousel
    :itemsToShow="3"
    :wrapAround="true"
    :transition="400"
    v-bind="settings"
    :breakpoints="breakpoints"
  >
    <slide v-for="(item, index) in store.slides" :key="index" class="p-4">
      <router-link
        :to="{
          name: 'ProductPage',
          params: {
            id: item.id,
          },
        }"
      >
        <div>
          <div class="cont_image">
            <img :src="item.image" />
          </div>
          <div class="description">
            <span>
              {{ item.title }}
            </span>
          </div>
        </div>
      </router-link>
    </slide>
    <template #addons>
        <navigation>
          <template #next>
            <span> <i class="fa-solid fa-chevron-right"></i> </span>
          </template>
          <template #prev>
            <span> <i class="fa-solid fa-chevron-left"></i> </span>
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
    

</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.portfolio_cont {
  color: $font_color;
}

span {
  color: $font_color;
}


.cont_image {
  width: 15em;
  height: 15em;
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
}

// Carosello

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 200px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

span {
  .fa-chevron-right,
  .fa-chevron-left {
    color: $font_color;
    font-size: 25px;
    &:hover {
      font-size: 30px;
    }
  }
}
</style>
