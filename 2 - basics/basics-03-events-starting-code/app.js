const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    reduceCounter(num) {
      return (this.counter -= num);
    },

    setName(event) {
      this.name = event.target.value;
    },

    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
