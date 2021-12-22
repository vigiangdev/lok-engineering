<template>
  <div class="project">
    <div class="project-image">
      <img
        v-if="project.slug && project.images"
        class="image"
        :src="
          require('@/assets/img/projects/' +
            project.slug +
            '/' +
            project.images[0])
        "
      />
    </div>
    <div class="info">
      <h1 v-if="project.title">{{ project.title }}</h1>
      <h2 v-if="project.location">{{ project.location }}</h2>
    </div>
    <div v-if="project.description" class="description">
      <p>{{ project.description }}</p>
    </div>
    <div class="companies">
      <p v-if="project.engineer">
        <span>Engineer:</span> {{ project.engineer }}
      </p>
      <p v-if="project.architect">
        <span>Architect:</span> {{ project.architect }}
      </p>
      <p v-if="project.contractor">
        <span>Contractor:</span> {{ project.contractor }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.project {
  font-size: 1rem;
  margin: 0 auto;
  max-width: 992px;
}

.project-image {
  margin: 0 auto;
  width: 100%;
  max-width: 992px;
  max-height: 1080px;
}

.image {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info {
  padding: 1em 0;
}

.info h1 {
  font-size: 1.2rem;
  font-weight: bold;
}

.info h2 {
  font-size: 1.1rem;
  font-weight: bold;
}

.description {
  font-size: 1rem;
  padding: 0.8rem 0;
}

.companies p {
  display: block;
  padding: 0;
}

.companies p:first-child {
  padding: 0;
}

.companies p:last-child {
  padding: 0;
}

.companies p span {
  font-weight: bold;
}

@media (min-width: 992px) {
  .companies p {
    display: inline-block;
    padding: 0 1em;
  }

  .companies p:first-child {
    padding: 0 1em 0 0;
  }

  .companies p:last-child {
    padding: 0 0 0 1em;
  }
} ;
</style>
