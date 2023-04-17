<template lang="">
    <header class="header_cont">
        <div class="container-fluid">

            <nav class="navbar navbar-expand-lg">
                <router-link class="personal-link" to="/">LDM</router-link>  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-item  nav-link" v-for="(item, index) in navItems" :key="index">
                            <router-link
                            :to="{ name: item.routeName }"
                            class="nav-item nav-link"
                            >
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </header>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{
            navItems:[
                    {
                        label: "Homepage",
                        routeName: "HomePage",  
                    },
                    {
                        label: "Portfolio",
                        routeName: "PortfolioPage",  
                    },
                    {
                        label: "Contatti",
                        routeName: "ContattiPage",  
                    },
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.header_cont{
    color: $font_color;
    background-color: #4F4557;

    .flex-nav{
        padding: 1em 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .d-row{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
    .personal-link{
        text-decoration: none;
        color: $font_color !important;

    }
    .nav-item{
        color: $font_color !important;
    }
}

</style>