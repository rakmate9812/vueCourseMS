<template>
  <div>
    <base-container title="Vuex">
      <h2>Basic Counter: {{ $store.state.counter }}</h2>
      <button @click="addOne">Add 1</button>
      <button @click="addMany">Add many</button>
      <button @click="addOneW2sec">Add one with 2 sec delay</button>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";

export default {
  components: {
    BaseContainer,
  },

  data() {
    return {};
  },

  methods: {
    // // here we can have methods changing the global state, but its a very dumb way - use mutations instead in the vuex store
    // addOne() {
    //   this.$store.state.counter++;
    // },
    // the right way
    addOne() {
      this.$store.commit("increment"); // calling the global method (or so called mutation) inside the method this way
    },

    addMany() {
      this.$store.commit("increase", { value: 10 }); // calling the global method (or so called mutation) inside the method this way
    },

    addOneW2sec() {
      // running an ACTION with dispatch
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
