<template>
  <div>
    <!--  importing the component locally, and writing its tag this way instead of <the-header><the-header/>-->
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role" />
  </div>
</template>

<script>
//components imported here locally this way
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  // components inserted into the the app locally here
  components: {
    // "the-header": TheHeader, // this is the old way
    TheHeader, // this is the NEW way
    BadgeList,
    UserInfo,
  },

  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
