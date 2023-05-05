const app = Vue.createApp({
  data() {
    return {
      detailsVisible: true,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenzó",
          phone: "06201234567",
          email: "lorenzovagyok@vmi.hu",
        },
        {
          id: "jj",
          name: "Juli Jones",
          phone: "06204141454",
          email: "imjj@vmi.hu",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
  computed: {
    detailsText() {
      return this.detailsVisible ? "Hide details" : "Show details";
    },
  },
  watch: {},
});

// IMPORTANT - COMPONENTS - mini apps - not very pleasent this way, but thera are other options
app.component("friend-contact", {
  template: `
  <ul>
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsText }}</button>
          <ul v-show="detailsVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
          </li>
          </ul>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzó",
        phone: "06201234567",
        email: "lorenzovagyok@vmi.hu",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
  computed: {
    detailsText() {
      return this.detailsVisible ? "Hide details" : "Show details";
    },
  },
});

app.mount("#app");
