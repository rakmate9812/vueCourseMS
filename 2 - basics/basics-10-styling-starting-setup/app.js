const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(box) {
      if (box === "A") this.boxASelected = !this.boxASelected;
      // negating the existing value, so this way can be toggled the value between true/false
      else if (box === "B") this.boxBSelected = !this.boxBSelected;
      else if (box === "C") this.boxCSelected = !this.boxCSelected;
    },
  },

  computed: {
    // DYNAMIC CLASS
    // this computed method will be added to the boxCdiv - see further explanation in the html
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
  watch: {},
});

app.mount("#styling");
