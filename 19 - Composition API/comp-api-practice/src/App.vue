<template>
  <div>
    <section class="container">
      <h2>{{ user.name }}</h2>
      <h2>{{ user.age }}</h2>
      <button @click="setAge">Add age</button>
    </section>
    <section class="container">
      <h3>Challange</h3>
      <h2 v-if="goalVisibility">{{ goal }}</h2>
      <button @click="toggleGoalVisibility">Toggle</button>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { reactive } from "vue";
// import { computed } from "vue"; // max uses computed values - good to know but wont waste much time on this
/*sytax for computed:
    const uName = computed(function(){
      return firstName.value + " " + lastName.value
    })
*/

// import { watch } from "vue"; // max uses watchers - good to know but wont waste much time on this as well - vid 292
/*syntax for watch - also can watch multiple values at once optionally as below
    watch([uAge, uName], function(newValues, oldValues){
      console.log(oldValues[0]); // this will be the old age 
      console.log(newValue[0]); // this will be the new age
      console.log(oldValues[1]); // this will be the old name
      console.log(newValue[1]); // this will be the new name
    })
*/

// max uses v-model vid 291 - the same as in the option api, just use ref inside the setup on the vars

export default {
  setup() {
    // const uName = ref("Mate"); // reactive value - this way we init vars
    // const uAge = ref(24);

    const user = reactive({
      name: "Mate",
      age: 24,
    });

    const goal = ref("Finish and master Vue"); // no need to use ref in this case, bc the value wont change - but for practice im using it
    let goalVisibility = ref(true); // need to use ref to this be reactive

    function setNewAge() {
      user.age += 1;
    }

    function toggleGoalVisibility() {
      goalVisibility.value = !goalVisibility.value;
    }
    // return { userName: uName, age: uAge };
    return {
      user: user,
      setAge: setNewAge,
      goal: goal,
      goalVisibility: goalVisibility,
      toggleGoalVisibility, // if we use the same name in both end, js allows us to write only once
    };
  },

  // data() {
  //   return {
  //     userName: "Maximilian",
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
