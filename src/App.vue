<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<template>
<div>

  <Header/>
  <router-view></router-view>
  <!-- <Footer /> -->


</div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
