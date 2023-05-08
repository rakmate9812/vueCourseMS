<template>
  <section>
    <!-- this component came later, see the friend-contact component for deep explanations -->
    <h2>New friend:</h2>
    <!-- upon the add-contact event (created as an emitter in NewFriend.vue) call a new method called addNewContact -->
    <new-friend @add-contact="addNewContact"></new-friend>
    <h2>My friends</h2>
    <ul>
      <!-- these attributes called PROPS come from the FriendContact.vue, have a look at the explanation there -->
      <!-- this is the non dynamic way to add data -->
      <!-- <friend-contact
        name="Mate"
        phone-number="+36201235468"
        email-address="asd@asd.hu">
      </friend-contact>
      <friend-contact 
      name="Bela" 
      phone-number="06201235338">
      </friend-contact> -->

      <!-- dynamic way of adding our data from our friends data list (need to bind every attribute to work)  
      (the props camelCased in FriendContact.vue, but kebab-cased here in html)-->
      <!-- IMPORTANT - toggle-favorite event, which defined and emitted here in FriendContact.vue, will fire a method called toggleFavoritaStatus (see the method for further explanation)-->
      <friend-contact
        v-for="fr in friends"
        :key="fr.id"
        :id="fr.id"
        :name="fr.name"
        :phone-number="fr.phone"
        :email-address="fr.email"
        :is-favorite="fr.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteContact">
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  components: [{ FriendContact }, { NewFriend }],

  data() {
    return {
      friends: [
        {
          id: "manu",
          name: "Manuel",
          phone: "+36202122321",
          email: "manu@asd.hu",
          isFavorite: true,
        },
        {
          id: "july",
          name: "Julie Jones",
          phone: "+36202156421",
          email: "july@asd.hu",
          isFavorite: false,
        },
      ],
    };
  },

  methods: {
    // IMPORTANT - the method gets a friendId as a param, from the emitted 'toggle-favorite' event
    // we will find the friend in our database absed on our id, and change its isFavorite property to its opposite (basically toggling)
    // THIS UPDATES THE DATA AND THE UI AS WELL!!!!!!!!!!!!!!!!!!!!!
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    addNewContact(friend) {
      this.friends.push(friend);
    },

    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId); //filtering out the friend which we want to delete (the filter will return false if the friendId found, and drop that friend out of the filtered array), overwriting the original array wih the filtered
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
