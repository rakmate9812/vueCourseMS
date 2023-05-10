<template>
  <ul>
    <li :class="activeOption === 'poor' ? 'active active-btn' : null">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="activeOption === 'average' ? 'active active-btn' : null">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="activeOption === 'great' ? 'active active-btn' : null">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // validating the custom element, see explanation in TheForm component
  props: ["modelValue"], // v-model will always set this prop under the hood on the custom component, so this needs to be named this way if
  emits: ["update:modelValue"], // this NEED to be wrote this way - emiting it

  data() {
    return {
      //   activeOption: null, // instead of this, we have to use a computed property, bc the style wont reset after the submit of the form
    };
  },

  computed: {
    activeOption() {
      return this.modelValue; // the modelValue prop is 2 way - when v-model sets this on the form, we will get back the value of it - so here we are setting this to this computed property
    },
  },

  methods: {
    activate(selectedOption) {
      //   this.activeOption = selectedOption; // this is needed if we use the data - activeOption, but we dumped that for using a computed property instead
      this.$emit("update:modelValue", selectedOption); // giving the selected option to the data we will emit
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0rem;
  display: flex;
}

li {
  margin-right: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  background-color: salmon;
}

.active-button {
  background-color: salmon;
}
</style>
