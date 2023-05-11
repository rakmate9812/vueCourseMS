<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },

  data() {
    return {
      isSaved: false,
    };
  },
  inject: ["users"],

  methods: {
    // this button click method show how we can use routing with a button click
    confirmInput() {
      // do some logic here
      //
      //
      this.$router.push("/teams"); // add a new routing history - we navigate here
      // this.$router.back(); // option to go back
      // this.$router.forward(); // option to go forward
    },

    saveChanges() {
      this.isSaved = true;
    },

    // mounted() {
    //   this.isSaved === false;
    // },
  },

  beforeRouteLeave(_to, _from, next) {
    // console.log(_to);
    if (this.isSaved) {
      next();
    } else {
      const decision = confirm(
        "Do you want to leave? There are unsaved changes"
      );
      next(decision);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

button {
  margin: auto;
  font: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
}
</style>
