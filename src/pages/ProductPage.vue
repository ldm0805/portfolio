    <script>
    import { store } from '../store';
    export default {
      data(){
        return{
          store,
          slide: null
        }
      },
      created() {
        this.slide = store.slides.find((p) => p.id == this.$route.params.id)
      },
    };
    </script>
<template>
  <div>
    <h2>Product Page</h2>
    <div class="cont_image">
      <img :src="slide.image" />
    </div>
    <div class="description">
      <p>{{ slide.description }}</p>
    </div>
  </div>
</template>

