<template>
  <div>
    <h2>Manage Goals</h2>
    <input
      v-model="enteredValue"
      style="width: 30rem"
      type="text"
      placeholder="try to write something, and switch the components with the buttons above" />
    <button v-on:click="setGoal">Set goal</button>

    <!-- showing our error-alert component upon inputIsInvalid=true -->
    <!-- TELEPORT - also teleporting it to the top of the html - just for semantic correction, its for optimisation rather -->
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Enter something</p>
        <button @click="confirmError">Ok</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "../ErrorAlert.vue";

export default {
  components: { ErrorAlert },

  data() {
    return {
      enteredValue: "",
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      if (this.enteredValue.trim() === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
      this.enteredValue = "";
    },
  },
};
</script>
