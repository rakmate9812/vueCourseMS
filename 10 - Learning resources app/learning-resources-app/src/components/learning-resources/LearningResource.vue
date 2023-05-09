<template>
  <!-- using the globally imported (in the main.js) base-card component as a slot of a card style  -->
  <base-card>
    <li>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <base-button btnMode="flat" @click="removeResource(id)"
            >Delete</base-button
          >
        </header>
        <p>{{ description }}</p>
        <a v-bind:href="link">View Resource</a>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],
  inject: ["removeResource"], // getting this from the parent TheResources component
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
