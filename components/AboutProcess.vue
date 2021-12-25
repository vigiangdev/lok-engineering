<template>
  <div class="container">
    <h2>Our Process</h2>
    <div class="cards">
      <CardIcon
        v-for="(process, index) in processes"
        :key="index"
        :process="process"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['processes']),
  },
}
</script>

<style scoped>
.container {
  border: 2px solid var(--color-gray-100);
  overflow: hidden;
  border-radius: 2rem;
  margin: 1rem;
}

h2 {
  font-size: 1.6rem;
  text-align: center;
  padding: 2rem;
  font-weight: normal;
  background-color: var(--color-gray-100);
}

.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  background-color: var(--color-gray-50);
}

@media (min-width: 992px) {
  .cards {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
}
</style>
