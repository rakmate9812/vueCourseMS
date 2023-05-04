const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: "",
      tasksVisible: true,
      buttonText: "Hide List",
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
      console.log(this.tasks);
    },

    tasksVisibilityChanger() {
      this.tasksVisible = !this.tasksVisible;
      this.buttonText === "Hide List"
        ? (this.buttonText = "Show List")
        : (this.buttonText = "Hide List");
    },
  },

  computed: {},

  watch: {},
});
app.mount("#assignment");
