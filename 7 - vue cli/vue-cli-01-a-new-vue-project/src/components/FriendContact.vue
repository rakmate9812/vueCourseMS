<template>
  <li>
    <!-- PROPS: instead of referring the data hard-coded as friend.name etc, we can use the PROPS keyword to connect our vue managed data to html, better explanation below -->
    <!-- without emit: -->
    <!-- <h2>{{ name }} {{ friendIsFavorite ? " - My favorite friend" : "" }}</h2> -->
    <!-- with emit: -->
    <h2>{{ name }} {{ isFavorite ? " - My favorite friend" : "" }}</h2>
    <button @click="toggleDetails">Show/Hide details</button>
    <br />
    <br />
    <button @click="deleteFriend">Delete friend</button>
    <br />
    <br />
    <button @click="toggleFavorite">Toggle favorite</button>
    <ul v-if="detailsVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // // PROPS: creating html attributes to help dynamicly code the data into html - see the custom attributes in 'App' component
  // // in html it needs to be kebab-case (see it in the App.vue), BUT in the vue component it needs to be camelCased - in this way we can refer to it using the this keyword
  // props: ["name", "phoneNumber", "emailAddress"], // can be done this way or
  // // this way, providing a lot more info about each prop
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String, // type can be set, simple and complex types too ( String Number Boolean Array Object Date)
      required: true, // is required - false by default
    },
    phoneNumber: {
      type: String,
      required: true,
      validator: function (value) {
        // can validate for example the phone number needs to start with +, or it will get a validation error warning
        return value[0] === "+";
      },
    },
    emailAddress: {
      type: String,
      required: false,
      default: "no email provided", // default can be set
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },

  // // EMITS: the counterpart to props - each emit is defining what our custom components methods will emit to the parent
  // // for example we have this emit below at the important section - here we can specify how do we want the amit method to look like - for example here we define that the emit method will need an id as a parameter
  // // you can specify the emit events as below:
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true; // if id exists return true, else return a warning
  //     } else {
  //       console.log("ID is missing");
  //       return false;
  //     }
  //   },
  // },

  // BUT you can do the same as with props, so just define an emit list, its easier
  emits: ["toggle-favorite", "delete-friend"],

  data() {
    return {
      detailsVisible: true,
      // friendIsFavorite: this.isFavorite, // see the explanation in the toggleFavorite method - actualy DONT need anymore, because of the amit vue method
      // we no longer use this friend data, just left here - you can use this if you want to with the basic convention in html {{ friend.name }}
      // friend: {
      //   id: "manu",
      //   name: "Manuel",
      //   phone: "+36202122321",
      //   email: "manu@asd.hu",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },

    toggleFavorite() {
      /* // // basically the guy explained a whole section what is goind on, than deleted the whole thing and added a much simple solution, here are the comments to the previous, more complicated solution
    // // THIS WONT WORK - bc we try to modify the data in the parent 'App' component
    //   this.isFavorite = !this.isFavorite; // this is the original property located in App.vue's data
    // },
    //- workaround: adding a data property in this case called friendIsFavorite, referring to the isFavorite data property from the 'App' parent component
    // this way we can set the value on the FRONTEND only (not cahnging the data in the App.js),
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite; // this is our custom made property here in this component (above)
      // // NOTE: - of course this will not change the original isFavorite property in our data (in App.vue), so we have another vue specific method to modify it called EMIT
      */
      // VERY IMPORTANT : FINAL SOLUTION TO THIS PROBLEM:
      // when the toggleFavorite method is fired (on click of the "Toggle favorite" button) - we will EMIT an event, called "toggle-favorite"
      this.$emit("toggle-favorite", this.id); // name of the custom event in parameter 1 in kebab-case
      // the second parameter (and any other than the first) can contain data: we add the id PROP to the method
      // this event is now can be called in the App.vue parent component, see the further explanation there
    },

    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
