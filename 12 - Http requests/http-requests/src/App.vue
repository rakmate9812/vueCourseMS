<template>
  <div>
    <!-- IMPORTANT - 
    Max provided a basic app with some components, but we will configure it 
    so that the data will come from a firebase db
    I didnt delete the parts that doesnt needed anymore, just commented them out to have a perspective what is going on compared to the original app
     -->

    <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences :results="savedSurveyResults"></user-experiences> -->

    <learning-survey></learning-survey>
    <user-experiences></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },

  data() {
    return {
      // savedSurveyResults: [],
    };
  },

  methods: {
    // storeSurvey(surveyData) {
    //   const surveyResult = {
    //     name: surveyData.userName,
    //     rating: surveyData.rating,
    //     id: new Date().toISOString(),
    //   };
    //   this.savedSurveyResults.push(surveyResult);
    //   console.log(surveyResult);
    // },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
