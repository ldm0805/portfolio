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
<style lang="scss" scoped>
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

