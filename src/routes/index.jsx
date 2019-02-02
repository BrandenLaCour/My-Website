import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProjectsPage from "views/ProjectsPage/ProjectsPage.jsx";
import BlogPage from "views/Blog/BlogPage.jsx";

var indexRoutes = [
  { path: "/about", name: "About", component: ProfilePage },
  { path: "/blog", name: "Blog", component: BlogPage },
  { path: "/projects", name: "Projects", component: ProjectsPage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
