const app = Vue.createApp({
  data() {
    return {
      myName: "Máté",
      myAge: Math.floor((new Date() - new Date(1998, 7, 25)) / 31557600000),
      imageURL:
        "https://images.unsplash.com/photo-1683061748664-750263c93c26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    };
  },
  methods: {
    myAgeIn5() {
      return this.myAge + 5;
    },

    randomFloat() {
      return Math.random();
    },
  },
}).mount("#assignment");
