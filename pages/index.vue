<template>
  <div>
    <SwiperScroll />
    <div id="about" class="home-container">
      <AboutCompany />
    </div>
    <div class="home-container">
      <AboutProcess />
    </div>
    <div id="contact" class="home-container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'HomeLayout',
  head: {
    title: 'Lok Engineering - Structural Engineer in SF Bay Area',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'company-description',
        name: 'description',
        content:
          'Lok Engineering specializes in residential construction. We offer design services for seismic retrofits, additions, remodels, and new construction.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>

<style scoped>
.home-container {
  max-width: 1140px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-top: 1px solid var(--color-primary-contrast);
}
</style>
