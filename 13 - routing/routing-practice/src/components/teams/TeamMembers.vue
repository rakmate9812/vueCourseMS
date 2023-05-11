<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"></user-item>
      <router-link to="/teams/t2">Go to team 2</router-link>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  components: {
    UserItem,
  },

  props: ["teamId"],

  inject: ["users", "teams"], // need to inject these to display, and have the teamid as an url ending, but will not have access yet - see the CREATED hook below

  data() {
    return {
      // teamName: "Test",
      // members: [
      //   // { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   // { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],

      teamName: "",
      members: [],
    };
  },

  methods: {
    loadTeamMembers(teamId) {
      // // console.log(this.$route); -- OR just this.route (the parameter route)
      // // // using route - to display tha team members id after the path, ex: /teams/t1
      // // this.$route.path; // this is the hard way -- we need to parse and do some other thing to set it right

      // THIS DOES NOT NEEDED anymore - we switched the
      // const teamId = route.params.teamId; // using a route parameter in main.js -:teamId -- this means that we can set in the  teamid in the /teams/{{teamId}} url to anything

      const selectedTeam = this.teams.find((team) => team.id === teamId); // in the url we type an id, ex: /teams/t1 - we than find that team in our team list with its id, storing as selectedTeam var

      if (!selectedTeam) return;
      const members = selectedTeam.members; // seletedTeam.member is a LIST OF MEMBER IDS - see the data in app.vue - we store all the member from our seleted team

      const selectedMembers = []; // init an empty list to store the selected members later with the same team id

      // because of members is just a list of member ids, we need to find the related data of all the members
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member); // get the data this way
        selectedMembers.push(selectedUser); // pushing it to the newly created array
      }

      this.members = selectedMembers; // set the injected this.members to our selectedMembers newly created list, which holds all the right members
      this.teamName = selectedTeam.name; // setting the teamname
    },
  },

  // IMPORTANT created hook -- when the data is available, but not yet displayed onscreen
  created() {
    this.loadTeamMembers(this.teamId);
  },

  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
