const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: "",
      tasksVisible: true,
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
    },
  },

  computed: {
    buttonText() {
      return this.tasksVisible ? "Hide List" : "Show List";
    },
  },

  watch: {},
});
app.mount("#assignment");
