const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // VUE $ref property: userText is the key (or can call it ref) of our input field,
      // in this way we can reference to the whole dom input element
      // basically Vue-s getelementbyid (instead of the id we use refs)
      console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");
