<template>
  <section>
    <!--NAMED SLOT using: -->
    <base-card>
      <template v-slot:cardSlot>
        <div>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </div>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
/* style SCOPED - the style will only apply on this component */
/* no need for styles here because we are using the base-card slot style */
</style>
