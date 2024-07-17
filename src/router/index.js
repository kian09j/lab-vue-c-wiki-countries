import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../components/CountryDetails.vue";
import CountriesList from "../components/CountriesList.vue";

const routes = [
  {
    path: "/",
    name: "list",
    component: CountriesList,
    children: [
      {
        path: "list/:alpha3Code",
        name: "country-details",
        component: CountryDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes,
});

export default router;