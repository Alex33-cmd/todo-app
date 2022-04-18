import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: () => import("./views/Todos.vue"),
    },
  ],
});

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/todos",
//       component: () => import("./views/Todos.vue"),
//     },
//   ],
// });
