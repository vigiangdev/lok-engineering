<template>
  <div class="image-content">
    <header class="header">
      <div></div>
    </header>
    <div class="container">
      <div class="info-container">
        <div class="image">
          <img
            :src="require('@/assets/img/about/' + staff.image)"
            :alt="staff.role"
          />
        </div>
        <div class="staff-info">
          <div class="staff-name">
            <span>{{ staff.name }}</span>
          </div>
          <div class="staff-role">
            <span>{{ staff.role }}</span>
          </div>
        </div>
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
  overflow: hidden;
}

.header {
  font-size: 1.4rem;
}

.container {
  border: 1px solid var(--color-gray-100);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  margin: 1rem;
}

.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-gray-100);
}

.staff-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
}

.staff-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.staff-role {
  color: var(--color-gray-500);
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 1rem;
  width: 96px;
  height: 96px;
  overflow: hidden;
  flex: 0 0 auto;
}

.image img {
  width: 100%;
}

.content {
  padding: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  background-color: var(--color-gray-50);
}

@media (min-width: 576px) {
  .info-container {
    flex-direction: column;
  }

  .staff-info {
    align-items: center;
  }

  .image-content:nth-child(even) .container .info-container {
    order: 1;
  }

  .container {
    flex-direction: row;
  }
}

@media (min-width: 992px) {
  .info-container {
    flex-direction: row;
  }

  .image-content:nth-child(even) .container .info-container {
    order: 0;
  }

  .container {
    flex-direction: column;
    margin: 1rem;
  }
}
</style>
