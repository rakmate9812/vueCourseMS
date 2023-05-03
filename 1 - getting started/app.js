// VANILLA ASPECT-------------------------
// const button = document.querySelector("button");
// const input = document.querySelector("#goal");
// const list = document.querySelector("ul");

// button.addEventListener("click", function () {
//   const goal = document.createElement("li");
//   goal.textContent = input.value;
//   list.appendChild(goal);
//   input.value = "";
// });

// VUE ASPECT (html code updated as well)-------------------------
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
