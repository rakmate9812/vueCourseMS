<template>
  <div>
    <ul>
      <!-- using PROPS from the LearningResource component to display the storedResources data -->
      <LearningResource
        v-for="resource in resources"
        :key="resource.id"
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link">
      </LearningResource>
    </ul>
  </div>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  // IMPORTANT - originally we used props, but we modified the components infrastructure by introducing the "TheResources" component,
  // in there, we "provide" the data, so here, instead of using props, we need to INJECT the data
  inject: ["resources"],

  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
