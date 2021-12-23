<template>
  <div>
    <div id="splash" class="home-container">
      <SplashScreen />
    </div>
    <div id="about" class="home-container divider">
      <AboutCompany />
    </div>
    <div class="home-container divider">
      <AboutProcess />
    </div>
    <div id="contact" class="home-container divider">
      <ContactForm />
    </div>
  </div>
</template>

<script>
export default {
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
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.5rem 0;
}

.divider {
  border-top: 1px solid var(--color-gray-200);
}

#splash {
  padding: 0;
  width: 100vw;
  max-width: initial;
}
</style>
