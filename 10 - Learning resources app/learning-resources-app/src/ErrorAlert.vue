<template>
  <teleport to="body">
    <div>
      <slot></slot>
    </div>
  </teleport>
</template>

<style scoped>
div {
  position: fixed;
  top: 20vh;
  left: 50%;
  width: 40%;
  background-color: azure;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
