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
  background-color: var(--color-primary);
  border: 0;
  border-radius: 1.5rem;
  color: var(--color-tertiary-contrast);
  cursor: pointer;
  width: 100%;
  min-height: 48px;
  margin: 0 auto;
  box-shadow: 2px 2px 5px var(--color-primary);
  transition: all 0.3s;
}

button:hover {
  transform: scale(1.02);
  box-shadow: 4px 4px 10px var(--color-primary);
}

button:active {
  transform: scale(1);
  box-shadow: 2px 2px 5px var(--color-primary);
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
