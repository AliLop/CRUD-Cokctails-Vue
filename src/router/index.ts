import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoritesView from "../views/FavoritesView.vue"
import ContactUsView from "../views/ContactUsView.vue";

const routerHistory = createWebHistory()

const router = createRouter({
     history: routerHistory, 
     routes: [
         {
             path: "/",
             name: "HomeView",
             component: HomeView
         },
         {
            path: "/favorites",
            name: "Favorites",
            component: FavoritesView

         },
         {
            path: "/contact-us",
            name: "Contact Us",
            component: ContactUsView
         }
     ]
 })

  export default router;