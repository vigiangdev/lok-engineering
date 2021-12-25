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
  font-weight: 500;
  letter-spacing: 0.2rem;
  padding: 0.5rem;
  background-color: var(--color-gray-600);
  border: 0;
  border-radius: 1.5rem;
  color: var(--color-gray-50);
  cursor: pointer;
  width: 100%;
  min-height: 48px;
  margin: 0 auto;
}

button:hover {
  background-color: var(--color-primary);
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
