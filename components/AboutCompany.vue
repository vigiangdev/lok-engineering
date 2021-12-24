<template>
  <div>
    <div class="container">
      <h2>The Firm</h2>
      <p class="card-container">
        <span class="emphasis"> Lok Engineering </span> is a full-service
        structural engineering firm based in Oakland, California. Our projects
        range from minor remodels to large-scale residential construction.
        During the design process, we collaborate with all design consultants to
        discuss strategies for providing the best structural solution for the
        project's specific needs. We work with contractors during the
        construction phase and provide quick responses to RFIs and solutions to
        construction-related issues that arise. From the preliminary design
        phase to the construction phase, we are committed to providing the
        highest quality service to our clients.
      </p>
    </div>

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
h2 {
  text-align: center;
  margin: 0 0 1.6rem;
  font-size: 1.6rem;
  font-weight: normal;
}

.emphasis {
  font-size: 1.4rem;
  font-weight: 500;
}

.container {
  margin: 0 0 5rem;
  padding: 1rem;
  border: 1px solid var(--color-primary-contrast);
  background-color: var(--color-gray-200);
}

.card-container {
  padding: 1rem;
  background-color: var(--color-gray-50);
}

.cards {
  display: flex;
  flex-direction: column;
}

@media (min-width: 992px) {
  .cards {
    flex-direction: row;
  }
}
</style>
