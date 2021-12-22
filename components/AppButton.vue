<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  letter-spacing: 0.2rem;
  padding: 0.5rem;
  background-color: var(--color-primary);
  border: 0;
  border-radius: 1.5rem;
  color: var(--color-tertiary-contrast);
  cursor: pointer;
  width: 100%;
  min-height: 48px;
  margin: 0 auto;
}

button:focus {
  outline: none;
}

@media (min-width: 576px) {
  button {
    width: 10em;
  }
}
</style>
