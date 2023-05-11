<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- IMPORTANT configuring the router link to go to the members page -->
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "memberCount"],
  computed: {
    teamMembersLink() {
      // console.log("/teams/" + this.id);
      // return "/teams/" + this.id; // this was the old way of setting the route - via path
      return {
        name: "team-members",
        params: { teamId: this.id },
        query: { sort: "asc" }, // query parameter - here you can create queries - this just creates url, you need to implement the functionality - you can check the query parameters by cl this.$route.query
      }; // this is much more convenient - navigating by route name - giving it our id prop as param - it basically does teh same as above the old way, but dynamically
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
