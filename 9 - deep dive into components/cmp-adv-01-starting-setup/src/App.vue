<template>
  <!-- IMPORTANT
      this section is a bit messy, we ---
      made some progression in importing components, commented out some code
      got into slots, commented out some of the code too
      now introducing dynamic components, making commenting code, created 2 new components for it  (activegoals, managegoals)
       -->

  <div>
    <!--  importing the component locally, and writing its tag this way instead of <the-header><the-header/>-->
    <TheHeader />
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role" /> -->

    <!-- DYNAMIC COMPONENTS we used to switch between components visibility this way: -->
    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'" />
    <ManageGoals v-if="selectedComponent === 'manage-goals'" /> -->

    <!-- DYNAMIC COMPONENTS - IS keyword - this is the new way of switching components onscreen -->
    <!-- KEEP ALIVE keyword - keeping the data entered on the component - when we switch between the active-goals and manage-goals the data wont be lost on the input field -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
//components imported here locally this way
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  // components inserted into the the app locally here
  components: {
    // "the-header": TheHeader, // this is the old way
    TheHeader, // this is the NEW way
    // BadgeList,
    // UserInfo,
    ActiveGoals,
    ManageGoals,
  },

  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
