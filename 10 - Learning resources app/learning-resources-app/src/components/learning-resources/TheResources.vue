<template>
  <div>
    <!-- this template is for changing the ui between the newform and the displayform of the resources -->
    <base-card>
      <!-- you can bind a click listener on the base-button element we created, because its a button element after all (see it in the BaseButton component) -->
      <base-button
        @click="setSelectedTab('stored-resources')"
        :btnMode="storedResourceButtonMode"
        >Stored resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :btnMode="addResourceButtonMode"
        >Add resource</base-button
      >
    </base-card>

    <!-- display the component that currently is in the selectedTab variable - also keeping in cache the user inputted data upon tab switch -->
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },

  data() {
    return {
      selectedTab: "stored-resources",

      storedResources: [
        {
          id: "official--guide",
          title: "Official Vue Guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google",
          link: "https://google.com",
        },
      ],
    };
  },

  // IMPORTANT
  // WE NEED TO PROVIDE with "provide-eject" the DATA (the storedResources list) to all the CHILD (and grandchild) components in this way - now for the StoredResources
  // ALSO provide the addNewResource METHOD to the AddResource child, so the child can call it
  // same game with the removeResource, giving it to the LearningResource component
  provide() {
    // the key is just a name you want, the value is what you want to provide to
    return {
      resources: this.storedResources,
      addNewResource: this.addNewResource, // not calling the method, just pointing at it
      removeResource: this.removeResource,
    };
  },

  computed: {
    storedResourceButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResourceButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addNewResource(newResource) {
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },

    removeResource(clickedID) {
      const resIndex = this.storedResources.findIndex((res) => {
        return res.id === clickedID;
      }); // storing the clicked items id in a const
      console.log(resIndex);
      this.storedResources.splice(resIndex, 1); // deleting the element with the gotten index
    },
  },
};
</script>
