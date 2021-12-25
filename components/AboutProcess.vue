<template>
  <div class="about-process">
    <h2 class="about-title">Our Process</h2>
    <div class="cards-container">
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
.about-process {
  border: 1px solid var(--color-gray-100);
  overflow: hidden;
  border-radius: 2rem;
  margin: 1rem;
}

.about-title {
  font-size: 1.6rem;
  text-align: center;
  padding: 1.5rem;
  font-weight: normal;
  background-color: var(--color-gray-100);
}

.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  padding: 0 0.5rem 0.5rem;
  background-color: var(--color-gray-100);
}

@media (min-width: 992px) {
  .cards-container {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
}
</style>
