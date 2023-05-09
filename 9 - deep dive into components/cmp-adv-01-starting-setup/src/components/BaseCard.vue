<template>
  <div>
    <slot name="cardSlot"></slot>
  </div>
  <!-- Max uses scoped slots also, pretty advanced not gonna dive into it -->
</template>

<script>
export default {
  // some interesting things -
  // this way we can inspect how many times this component is mounted on the screen
  // and log all the occurences when a slot is created - 2 times at this moment
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
