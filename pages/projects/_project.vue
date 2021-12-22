<template>
  <div class="project-container">
    <ProjectDescription :project="project" />
    <div class="project-images">
      <div
        v-for="(image, index) in project.images.slice(1, project.images.length)"
        :key="index"
        class="image-container"
      >
        <ProjectImage :slug="project.slug" :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CompanyProject',
  head: {
    title: `Portfolio - Lok Engineering`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'project',
        name: 'description',
        content: "A portfolio showcasing some of Lok Engineering's work.",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  computed: {
    ...mapGetters(['projectBySlug']),
    project() {
      return this.projectBySlug(this.$route.params.project)
    },
  },
}
</script>

<style scoped>
.project-container {
  padding: 1.5rem;
}

.project-images {
  margin: 3em 0 0;
}

.image-container {
  margin: 1em 0;
}
</style>
