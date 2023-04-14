<template lang="">
   <footer>
    <div class="d-flex justify-content-between align-items-center px-2">
        <div class="d-flex align-items-center gap-2 py-1">
            <i class="fa-regular fa-copyright pb-1"></i>
            <h6 class="">2023 LDM</h6>
        </div>
        <div>
            Prova
        </div>
    </div>
   </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer{
    color: $font_color;
    background-color: #4F4557;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

}
    
</style>