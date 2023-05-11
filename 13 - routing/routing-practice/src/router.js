import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";

// IMPORTANT IMPORTANT
// ROUTER initializing
// creating routes for components (so when a component is mounted on screen, the router takes care of the url)
const router = createRouter({
  history: createWebHistory(), // for remembering the history of the visited routes

  // we import these components here globally, dont need to import them any other place in the project
  routes: [
    {
      path: "/",
      redirect: "/teams", // when the user enters the page without subdomain (http://localhost:8080/ this case), redirect to the /teams page
      component: TeamsList,
    },
    {
      name: "teams", // name property - we will navigate with this property, not path, its better (see in TeamsItem comp)
      path: "/teams",
      meta: { teamsNeedsAuth: true }, // mate prop - can store any data you want, and access through where the $route object is available
      component: TeamsList,
      children: [
        {
          // nested routes - child route
          name: "team-members",
          path: ":teamId", // "":"" - means that a parameter will follow, ""teamId"" is the name of the parameter -- see what is going on in TeamMembers comp
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      component: UsersList,
    },
    {
      //if the path does not match any of the above - (instead of component, you can redirect ex to /teams too)
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],

  // can easily set the scrolling behavour between routes
  // 3 params - always needed
  scrollBehavior(_to, _from, savedPosition) {
    // one more thing: if you dont want to use some of the built in parameters, you can skip them with an _ in front
    // console.log(to); // page we going to - IMPORTANT - this is the $route as well!!!!!!
    // console.log(from); // page we coming from
    // console.log(savedPosition); // the position we are coming from

    // if we go back, we go to the saved position
    if (savedPosition) {
      return savedPosition;
    }

    // else return to the top of the page
    return {
      left: 0,
      top: 0,
    };
  },
});

// navigation guards - doesnt let the user navigate off the page on an accidental btn click, ex when a form is not saved
router.beforeEach(function (_to, _from, next) {
  /*
    // console.log("before beforeeach happens");
    // console.log(to, from);
    // next(false); // this way we dont allow the navigation, basically disallow to enter the page - later will be useful when authenticating
    */
  next(); // this way we allow the navigation

  // simple example, also combining it with the meta.needsAuth data
  /*
    // if auth is needed, deny the load of the page (now its always denied)
    if (_to.meta.teamsNeedsAuth) {
      //add auth logic
  
      alert("Auth needed!");
      next(false); // deny to enter the page
    } else {
      // else, allow to enter the page
      next();
    }
    */
});

// IMPORTANT - max uses some of the router methods (router.afterEach, beforeEach, beforeEnter, beforeRouteEnter etc)

export default router;
