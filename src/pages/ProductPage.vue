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
  <div class="container">
    <h2>{{ slide.title }}</h2>
    <div class="d-flex flex-wrap">
      <div class="d-flex flex-wrap">
        <img class="cont_image" v-for="(image, index) in slide.image" :key="index" :src="image" />
      </div>
    </div>
    <div class="description">
      <p>{{ slide.description }}</p>
      
      <span class="portfolio-link" v-for="(tech, index) in slide.tech" :key="index">{{ tech }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
h2,.description{
  color: $font_color;
  .tech_tags{
    padding: .2em .5em;
    margin: 0em 0.5em;
    border: 1px solid red;
  }
}
.cont_image{
 height: 300px;
 width: 300px;
 object-fit: cover;
 img{
  height:100%;
  width: 100%;
 }
}

.portfolio-link{
    display: inline-block;
    margin: 0em 0.5em;
    padding: .2em .5em;
    text-decoration: none;
    border: 2px solid black;
    color: $font_color;
    background-color: transparent;
    &:hover{
        scale: 1.1;
        box-shadow: black 3px 3px;   
    }
}
</style>

