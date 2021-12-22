<template>
  <div class="nav-button-container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--color-primary);
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 50%;
  background-color: var(--color-gray-100);
  box-shadow: 0 0 0.5rem rgba(140 140 140 / 80%);
  transition: all 0.2s ease-in;
  outline: none;
}

.nav-button-container:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0.75rem rgba(140 140 140 / 100%);
  outline: none;
}

.nav-button-container:active {
  transform: scale(1);
  box-shadow: 0 0 0.5rem rgba(140 140 140 / 80%);
  outline: none;
}
</style>
