import Routing from "./index.vue";

export const routes = [  
  {
    path: "/login",
    component: () => import("./LoginPage"),
    name: "Login",
  },
  {
    path: "/map",
    component: () => import("./MapPage"),
    name: "Map",
  },
  {
    path: "/springs",
    component: () => import("./SpringsPage"),
    name: "Springs",
  },
  {
    path: "/spring/:id",
    component: () => import("./SpringPage"),
    name: "Spring",
  },
];

export { Routing };
