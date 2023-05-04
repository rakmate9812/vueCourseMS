const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      visibilityBool: true,
      userInputtedColor: "",
    };
  },

  methods: {
    toggleVisibility() {
      this.visibilityBool = !this.visibilityBool;
    },
  },

  computed: {
    userInputtedClass() {
      if (this.userInput === "user1") return { user1: true };
      if (this.userInput === "user2") return { user2: true };
    },

    toggleVisibilityClass() {
      if (this.visibilityBool) return { visible: true, hidden: false };
      if (!this.visibilityBool) return { visible: false, hidden: true };
    },
  },
  watch: {},
});
app.mount("#assignment");
