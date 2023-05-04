const app = Vue.createApp({
  data() {
    return {
      result: 0,
      resetTimeSeconds: 3,
      guessNum: Math.floor(Math.random() * 50),
    };
  },

  methods: {
    incrementBy(num) {
      this.result += num;
      console.log(this.guessNum);
    },
  },

  computed: {
    // this can be done in methods, but get used to working here with computed values bc of much better performance, and avoiding bugs - reminder -> methods run on every change on the page (even if the method has nothing to do with the modified component)
    resultMessage() {
      if (this.result < this.guessNum) {
        return "Not there yet";
      } else if (this.result > this.guessNum) {
        return `Too much, back to zero in ${this.resetTimeSeconds} seconds`;
      } else {
        return `Congrats, the number was ${this.guessNum}, back to 0 in ${this.resetTimeSeconds} seconds`;
      }
    },
  },

  watch: {
    // watching the resultmessage computed property, making some changes if result changes
    resultMessage(value) {
      const that = this; // bc the settimeout will fuck up the 'this'
      if (that.result >= that.guessNum) {
        setTimeout(() => {
          //   console.log("this has run after " + that.resetTimeSeconds + " seconds");
          that.result = 0;
          that.guessNum = Math.floor(Math.random() * 50);
        }, that.resetTimeSeconds * 1000);
      }
    },
  },
});

app.mount("#assignment");
