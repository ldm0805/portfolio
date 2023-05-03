<template>
  <div>
    <h2>Product Page</h2>
    <div class="cont_image">
      <img :src="image" />
    </div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  mounted() {
    console.log("id:", this.id);
    console.log("image:", this.image);
    console.log("description:", this.description);
  },
};
</script>
