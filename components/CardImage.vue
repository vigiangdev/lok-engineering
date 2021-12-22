<template>
  <div class="image-content">
    <header class="header">
      <div></div>
    </header>
    <div class="container">
      <div class="image">
        <img
          :src="require('@/assets/img/about/' + staff.image)"
          :alt="staff.role"
        />
      </div>
      <main class="content">
        <div>
          {{ staff.description }}
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    staff: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.image-content {
  font-size: 1rem;
  padding: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;
}

.image {
  align-self: center;
  margin: 0 auto;
}

.image img {
  width: 12rem;
}

.header {
  font-size: 1.4rem;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .image {
    flex-basis: 12rem;
    flex-grow: 1;
  }

  .image-content:nth-child(odd) .container .image {
    padding: 0 2rem 0 0;
  }

  .image-content:nth-child(even) .container .image {
    order: 2;
    padding: 0 0 0 2rem;
  }

  .container {
    flex-direction: row;
  }

  .content {
    margin-top: 0;
    flex-basis: 0;
    flex-grow: 12;
  }
}

@media (min-width: 992px) {
  .image-content:nth-child(even) .container .image {
    order: 0;
    padding: 0 2rem 0 0;
  }
}
</style>
