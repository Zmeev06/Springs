import Routing from "./index.vue";

export const routes = [  
  {
    path: "/login",
    component: () => import("./LoginPage"),
    name: "Login",
  },
];

export { Routing };
