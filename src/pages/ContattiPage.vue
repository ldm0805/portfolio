<template lang="">
    <div class="cont d-flex justify-content-center">

        <div class="d-flex flex-column gap-3">
            <div>
                Contatti 
            </div>
            <a href="https://github.com/ldm0805"> 
                <i class="fa-brands fa-square-github fa-xl"></i> GitHub
            </a>
            <a href="mailto:leonardodimaggio94@gmail.com">
                <i class="fa-solid fa-envelope fa-xl"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/leonardo-di-maggio-4ba403268/">
                <i class="fa-brands fa-linkedin fa-xl"></i> Linkedin
            </a>
            <a href="../../public/curriculum/Leonardo-Di-Maggio-cv.pdf" download>
                <i class="fa-solid fa-user fa-xl"></i> Curriculum
            </a>
            <a href="#">
                <i class="fa-solid fa-mobile fa-xl"></i> Num Telefono
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div{
    color: $font_color;
    a{
        text-decoration: none;
        color: $font_color;
        transition: 300ms;
        &:hover{
            color: rgb(0, 0, 87);
        }
    }
}
    
</style>