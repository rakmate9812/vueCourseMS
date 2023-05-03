const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish:)",
      vueLink: "https://vuejs.org",
      goalA: "Learn Vue",
      goalB: "Master Vue",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum > 0.5) return this.goalA;
      if (randomNum <= 0.5) return this.goalB;
    },
  },
});
app.mount("#user-goal");
