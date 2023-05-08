<template>
  <form>
    <div>
      Friend name:
      <input type="text" v-model="enteredFriendName" />
    </div>
    <div>
      Friend phone:
      <input type="text" v-model="enteredFriendPhone" />
    </div>
    <div>
      Friend email:
      <input type="email" v-model="enteredFriendEmail" />
    </div>
    <button @click.prevent="addFriend">Add friend</button>
    <br />
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],

  data() {
    return {
      newFriends: [],
      enteredFriendName: "",
      enteredFriendPhone: "",
      enteredFriendEmail: "",
      enteredFriendIsFavorite: null,
    };
  },
  methods: {
    addFriend() {
      // creating an exact same friend object as in the App.vue data
      // Max doest create a friend object here, rather he passes all the data gathered in the inputs - I made this part as a challange, thats why its different
      const friend = {
        id: this.enteredFriendName + this.enteredFriendPhone,
        name: this.enteredFriendName,
        phone: this.enteredFriendPhone,
        email: this.enteredFriendEmail,
        isFavorite: false,
      };

      //   // this is just for testing purposes, we will only send the friend object, not the newFriends list
      //   this.newFriends.push(friend);
      //     this.newFriends.forEach((fr) => {
      //       console.log(fr);
      //     });

      this.$emit("add-contact", friend); // amitting the friend object upon the add-contact event trigger
    },
  },
};
</script>
