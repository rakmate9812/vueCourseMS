<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="!isLoading && noData">There are no data in the database</p>
      <p v-else-if="!isLoading && error">{{ errorMessage }}</p>
      <ul v-else-if="!isLoading && dataArrived">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from "axios";
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: "",
    };
  },

  methods: {
    async getDataFromDB(url) {
      try {
        const response = await axios({
          method: "GET",
          url: url,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // helper method - practicing axios - Max uses fetch, I swapped it to axios
    async fetchData(url) {
      const response = await axios.get(url);
      return response.data;
    },

    async loadExperiences() {
      try {
        this.errorMessage = "";
        this.isLoading = true;
        const data = await this.fetchData(
          "https://vue-http-demo-abfac-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
        );

        // we create a new array for the request results, we will later give the whole array to the results array -
        // this is because we dont want to display again and again the newly fetched objects to the screen, instead the whole list at once
        const reqResults = [];

        // pushing the fetched data to the results array
        for (const id in data) {
          reqResults.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }

        // giving the results at once, vue will display all of them at once
        this.results = reqResults;
        this.isLoading = false;
      } catch (err) {
        // console.error(err);
        this.isLoading = false;
        this.errorMessage = err;
        // throw new Error("Error loading experiences.");
      }
    },
  },

  // MOUNTED HOOK - reminder: on initializing this component, the mounted hook will run (like an OnStart method) - we call the loadExp method, so the data will be displayed onscreen on init
  mounted() {
    this.loadExperiences();
  },

  computed: {
    // no data error handling - not really an error, just giving the user info on the screen
    dataArrived() {
      return this.results.length > 0;
    },

    noData() {
      return this.results.length === 0 && this.errorMessage === "";
    },

    error() {
      return this.errorMessage !== "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
