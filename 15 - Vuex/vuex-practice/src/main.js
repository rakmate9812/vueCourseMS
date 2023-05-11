import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

// IMPORTANT - vuex store - everything is available for every component

const store = createStore({
  // state = data
  state() {
    return {
      counter: 0, // available as this.$state.counter
      anotherCounter: 1, // available as this.$state.counter
    };
  },

  // mutations = methods
  mutations: {
    increment(state) {
      state.counter++;
    },

    //method with parameter called payload - you can rename it to anything
    increase(state, number) {
      state.counter = state.counter + number.value;
    },

    // here you cannot run async code, see the ACTIONS below
    incrementAsync(state) {
      state.counter++; // this is NOT async yet, see it in the actions
    },
  },

  // getters = computed
  // very very stupid example, i can barely understand whats going on - not implemnented, this is just an example of setting up a getter in vuex store
  getters: {
    anotherCounter(state) {
      return state.anotherCounter * 2;
    },
  },

  // actions -- can make vuex mutations async
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit("incrementAsync"); // this incrementAsync is from the mutations, good practice to add the same name to the action as well
      }, 2000);
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
