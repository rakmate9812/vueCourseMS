// IMPORTANT: METHODS VS COMPUTED VS WATCH
// methods for: event binding (v-on), data or events that really needs to be reevaluated
// computed for: data binding which dont need to be reevaluated
// watch for: reaction for any code thats ran in the methods/computed (not for data changes)

// IMPORTANT: v-on can be replaced with the '@' symbol - @click="method"
// IMPORTANT: v-bind can be replaced with the ':' symbol - :value="valalmi string"

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "", // see it below at the WATCH section
    };
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      // document.querySelector("input").value = ""; // vanilla way, works but not Vue-ish

      this.name = "";
    },

    outputFullName() {
      console.log("this runs every time when someting cahnges on the page"); // this is not ideal, so we introduce COMPUTED properties
      return this.name + " " + "Rak";
    },
  },

  // COMPUTED methods - methods, but behaving like properties - so give them names like you would to properties - often used
  computed: {
    fullname() {
      console.log("this wont run every time like a method");
      return this.name + " " + "Rak";
    },
  },

  // WATCH methods - can re-apply properties and methods now so used, and a bit complicated, can collide with computed
  watch: {
    // // the value param refers to this.name, but commenting it out so wont collide with the computed fullname method
    // name(value) {
    //   this.fullname = value + " " + "Rakkkkkk";
    // },

    // a better example - reapplying counter if it hits 50
    counter(value) {
      if (value >= 50) this.counter = 0;
    },

    // another good use cases: TIMERS, HTTP REQUESTS - when something changes
  },
});

app.mount("#events");
