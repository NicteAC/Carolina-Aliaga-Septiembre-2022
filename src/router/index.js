import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BreakingBad from "../views/BreakingBad.vue";
import BetterCallSaul from "../views/BetterCallSaul.vue";
import CharacterDetail from "../views/CharacterDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/breaking-bad",
      name: "breaking-bad",
      component: BreakingBad,
    },
    {
      path: "/breaking-bad/:id",
      name: "breaking-bad-detail",
      props: true,
      component: CharacterDetail,
    },
    {
      path: "/better-call-saul",
      name: "better-call-saul",
      component: BetterCallSaul,
    },
    {
      path: "/better-call-saul/:id",
      name: "better-call-sauldetail",
      props: true,
      component: CharacterDetail,
    },
    { path: "/:pathMatch(.*)*", name: "home", component: HomeView },
  ],
});

export default router;
