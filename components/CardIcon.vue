<template>
  <div class="card">
    <div class="card-image-max">
      <font-awesome-icon
        :icon="[process.stylePrefix, process.icon]"
        :size="process.size"
      />
    </div>
    <div class="card-content">
      <div class="container">
        <div class="card-image-min">
          <font-awesome-icon
            :icon="[process.stylePrefix, process.icon]"
            :size="process.size"
          />
        </div>
        <div class="card-title">
          <p>{{ process.title }}</p>
        </div>
      </div>
      <div class="card-detail">
        <p>{{ process.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    process: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5em;
  background-color: var(--color-background);
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.card-image-max {
  display: none;
}

.card-image-min {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  min-height: 2rem;
  font-size: 0.8rem;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card-title {
  font-size: 1.3rem;
}

.card-detail {
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0 0;
}

@media (min-width: 992px) {
  .card-image-min {
    display: none;
  }

  .card-image-max {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 5rem;
    min-height: 5rem;
    font-size: 1rem;
  }

  .card {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 0;
    flex-grow: 1;
  }

  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-detail {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
