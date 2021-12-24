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
    title: 'Lok Engineering - Structural Engineer | SF Bay Area',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Structural engineers who specialize in residential buildings. We offer design services for new construction, ADUs, additions, remodels, and seismic retrofits.',
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
