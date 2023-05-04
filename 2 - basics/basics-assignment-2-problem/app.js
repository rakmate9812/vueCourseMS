const app = Vue.createApp({
  data() {
    return {
      paragraphText: "",
      confirmedParagraphText: "",
    };
  },

  methods: {
    buttonAlert() {
      alert("Wakie, wakie!");
    },

    setParagraphText(e) {
      this.paragraphText = e.target.value;
    },

    setConfirmedParagraphText() {
      this.confirmedParagraphText = this.paragraphText;
    },
  },
});

app.mount("#assignment");
