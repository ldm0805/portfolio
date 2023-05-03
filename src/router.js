// //1 passaggio: importiamo i metodi dal pacchetto createRouter e createWebHistory
import { createRouter, createWebHistory } from "vue-router";

// //2 importare le componenti che rappresentano le pagine
import HomePage from "./pages/HomePage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ContattiPage from "./pages/ContattiPage.vue";
import ProductPage from "./pages/ProductPage.vue";

// //3 creiamo l'oggetto router, nell'array di oggetti inseriamo i dati delle nostre rotte
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/PortfolioPage",
      name: "PortfolioPage",
      component: PortfolioPage,
    },
    {
      path: "/product/:id",
      name: "ProductPage",
      component: ProductPage,
    },
    {
      path: "/ContattiPage",
      name: "ContattiPage",
      component: ContattiPage,
    },
  ],
});

// 4 esportiamo il router

export { router };
