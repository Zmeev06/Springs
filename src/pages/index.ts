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
];

export { Routing };
