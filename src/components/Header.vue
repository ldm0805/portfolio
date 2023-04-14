<template lang="">
    <header class="header_cont">
            <div class="col-12 flex-nav">
                <div class="">
                    <router-link class="personal-link" to="/">LDM</router-link>
                </div>
                <div class="">
                    <ul class="navbar-nav d-row">
                        <li v-for="(item, index) in navItems" :key="index">
                            <router-link
                            :to="{ name: item.routeName }"
                            class="nav-item nav-link"
                            >
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </div>
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
        color: $font_color;

    }
}

</style>