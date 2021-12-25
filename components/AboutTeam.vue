<template>
  <div class="container">
    <h2>The Team</h2>
    <div class="cards">
      <CardImage v-for="(staff, index) in staffs" :key="index" :staff="staff" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['staffs']),
  },
}
</script>

<style scoped>
.container {
  border: 2px solid var(--color-gray-100);
  border-radius: 2rem;
  background-color: var(--color-gray-100);
  overflow: hidden;
  margin: 1rem;
}

h2 {
  text-align: center;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
}

.cards {
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-50);
}

@media (min-width: 992px) {
  .cards {
    flex-direction: row;
  }
}
</style>
