// importing the vue package
import { createApp } from "vue";

// impoting the App.vue
import App from "./App.vue";

// importing components
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact); // attaching the component from FriendContact default export
app.component("new-friend", NewFriend); // attaching the component from NewFriend default export
app.mount("#app");
