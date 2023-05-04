const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },

    removeGoal(idx) {
      // removing the item from the given index with splice
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
