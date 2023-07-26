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
    <h2>{{ slide.title }}</h2>
    <div class="cont_image">
      <img :src="slide.image" />
    </div>
    <div class="description">
      <p>{{ slide.description }}</p>
      
      <span class="badge badge-dark" v-for="(tech, index) in slide.tech" :key="index">{{ tech }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
h2,.description{
  color: $font_color;
  .tech_tags{
    // padding: 1em 2em;
    // border: 1px solid red;
  }
}
.cont_image{
 height: 200px;
 width: 200px;
 object-fit: contain;
 img{
  height:100%;
  width: 100%;
 }
}
</style>

