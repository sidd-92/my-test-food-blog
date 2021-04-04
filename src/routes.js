import React from "react";
//Links
export const linkHome = "/";
export const linkCategories = "/categories";
//Links

//Link Names
export const linkNameHome = "Home";
export const linkNameCategories = "Categories";
//Link Names

//Pages
const Home = React.lazy(() => import("./components/views/Home/Home"));
const Categories = React.lazy(() =>
  import("./components/views/Categories/Categories")
);
//Pages

const routes = [
  {
    path: linkHome,
    exact: true,
    name: linkNameHome,
    component: Home,
  },
  {
    path: linkCategories,
    exact: true,
    name: linkNameCategories,
    component: Categories,
  },
];

export default routes;
